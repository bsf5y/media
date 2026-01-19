/**
 * The Bootstrap Factory — Landing Page
 * Content injection and interactions
 */

import content from './content/content.json'

/* ============================================
   Theme System
   ============================================ */

/**
 * Initialize the color mode (light/dark).
 * Priority: localStorage > system preference > default (dark)
 */
function initMode() {
  const stored = localStorage.getItem('bsf5y-mode')
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

  let mode
  if (stored) {
    mode = stored
  } else {
    mode = systemPrefersDark ? 'dark' : 'light'
  }

  document.documentElement.setAttribute('data-mode', mode)

  // Listen for system preference changes (only if no stored preference)
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    if (!localStorage.getItem('bsf5y-mode')) {
      const newMode = e.matches ? 'dark' : 'light'
      document.documentElement.setAttribute('data-mode', newMode)
    }
  })
}

/**
 * Toggle between light and dark mode
 */
function toggleMode() {
  const current = document.documentElement.getAttribute('data-mode')
  const next = current === 'light' ? 'dark' : 'light'
  document.documentElement.setAttribute('data-mode', next)
  localStorage.setItem('bsf5y-mode', next)
}

// Initialize mode immediately to prevent flash
initMode()

// Set up mode toggle button
const modeToggle = document.querySelector('.mode-toggle')
if (modeToggle) {
  modeToggle.addEventListener('click', toggleMode)
}

/* ============================================
   Dev-Only Accent Picker
   ============================================ */

if (import.meta.env.DEV) {
  /**
   * Initialize the accent color picker (dev-only)
   */
  function initAccentPicker() {
    const stored = localStorage.getItem('bsf5y-accent')
    if (stored) {
      document.documentElement.setAttribute('data-accent', stored)
    }

    // Inject the accent picker widget
    const pickerHtml = `
      <div class="accent-picker">
        <button class="accent-picker-toggle" aria-label="Open accent color picker" title="Accent picker (dev only)">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10"/>
            <circle cx="12" cy="12" r="6"/>
            <circle cx="12" cy="12" r="2"/>
          </svg>
        </button>
        <div class="accent-picker-panel">
          <div class="accent-picker-header">
            <span class="accent-picker-title">Accent</span>
            <span class="accent-picker-badge">DEV</span>
          </div>
          <div class="accent-picker-options">
            <button class="accent-option${!stored || stored === 'copper' ? ' active' : ''}" data-accent="copper">
              <span class="accent-swatch accent-swatch-copper"></span>
              <span>Copper</span>
            </button>
            <button class="accent-option${stored === 'steel' ? ' active' : ''}" data-accent="steel">
              <span class="accent-swatch accent-swatch-steel"></span>
              <span>Steel</span>
            </button>
            <button class="accent-option${stored === 'forest' ? ' active' : ''}" data-accent="forest">
              <span class="accent-swatch accent-swatch-forest"></span>
              <span>Forest</span>
            </button>
          </div>
        </div>
      </div>
    `

    document.body.insertAdjacentHTML('beforeend', pickerHtml)

    const picker = document.querySelector('.accent-picker')
    const toggle = picker.querySelector('.accent-picker-toggle')
    const panel = picker.querySelector('.accent-picker-panel')
    const options = picker.querySelectorAll('.accent-option')

    // Toggle panel visibility
    toggle.addEventListener('click', () => {
      panel.classList.toggle('open')
    })

    // Close panel on click outside
    document.addEventListener('click', (e) => {
      if (!picker.contains(e.target)) {
        panel.classList.remove('open')
      }
    })

    // Handle accent selection
    options.forEach((option) => {
      option.addEventListener('click', () => {
        const accent = option.dataset.accent

        // Update active state
        options.forEach((o) => o.classList.remove('active'))
        option.classList.add('active')

        // Apply accent
        if (accent === 'copper') {
          document.documentElement.removeAttribute('data-accent')
          localStorage.removeItem('bsf5y-accent')
        } else {
          document.documentElement.setAttribute('data-accent', accent)
          localStorage.setItem('bsf5y-accent', accent)
        }
      })
    })
  }

  initAccentPicker()
}

/**
 * Sanitize HTML to prevent XSS attacks.
 * Allows only safe tags and attributes commonly used in content.
 * @param {string} html - Raw HTML string to sanitize
 * @returns {string} - Sanitized HTML string
 */
function sanitizeHtml(html) {
  const allowedTags = ['p', 'strong', 'em', 'br', 'ul', 'ol', 'li', 'span', 'a']
  const allowedAttrs = ['class', 'href', 'target', 'rel']

  const div = document.createElement('div')
  div.innerHTML = html

  function sanitizeNode(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      return
    }

    if (node.nodeType === Node.ELEMENT_NODE) {
      const tagName = node.tagName.toLowerCase()

      // Remove disallowed tags but keep their text content
      if (!allowedTags.includes(tagName)) {
        const text = document.createTextNode(node.textContent)
        node.parentNode.replaceChild(text, node)
        return
      }

      // Remove disallowed attributes
      const attrs = Array.from(node.attributes)
      for (const attr of attrs) {
        if (!allowedAttrs.includes(attr.name.toLowerCase())) {
          node.removeAttribute(attr.name)
        }
        // Sanitize href to prevent javascript: URLs
        if (attr.name === 'href' && attr.value.toLowerCase().startsWith('javascript:')) {
          node.removeAttribute('href')
        }
      }

      // Add security attributes to external links
      if (tagName === 'a' && node.getAttribute('href')?.startsWith('http')) {
        node.setAttribute('target', '_blank')
        node.setAttribute('rel', 'noopener noreferrer')
      }

      // Recursively sanitize children
      Array.from(node.childNodes).forEach(sanitizeNode)
    }
  }

  Array.from(div.childNodes).forEach(sanitizeNode)
  return div.innerHTML
}

// Inject content from JSON into template
function injectContent() {
  // Hero section
  const taglineEl = document.querySelector('[data-content="hero.tagline"]')
  if (taglineEl && content.hero.tagline) {
    const [main, accent] = content.hero.tagline.split(', ')
    taglineEl.innerHTML = `
      <span class="hero-tagline-main">${main},</span>
      <span class="hero-tagline-accent">${accent}</span>
    `
  }

  setContent('hero.lead', content.hero.lead)
  setContent('hero.reframe', content.hero.reframe)
  setHtml('hero.subtext', content.hero.subtext, 'hero-subtext')

  // Positioning
  setHtml('positioning._content', content.positioning._content, 'positioning-text')

  // Methodology
  setContent('methodology.headline', content.methodology.headline)
  setContent('methodology.intro', content.methodology.intro)

  const phasesEl = document.querySelector('[data-content="methodology.phases"]')
  if (phasesEl && content.methodology.phases) {
    phasesEl.innerHTML = content.methodology.phases.map(phase => `
      <article class="phase">
        <div class="phase-number">${phase.number}</div>
        <div class="phase-content">
          <h3 class="phase-name">${phase.name}</h3>
          <p class="phase-question">${phase.question}</p>
          <p class="phase-description">${phase.description}</p>
        </div>
      </article>
    `).join('')
  }

  // Services
  const servicesEl = document.querySelector('[data-content="services"]')
  if (servicesEl && content.services) {
    servicesEl.innerHTML = content.services.map(service => `
      <article class="service">
        <span class="service-type">${service.type}</span>
        <h3 class="service-title">${service.title}</h3>
        <p class="service-description">${service.description}</p>
      </article>
    `).join('')
  }

  // CTA
  setContent('cta.headline', content.cta.headline)
  setContent('cta.subtext', content.cta.subtext)
  setContent('cta.button', content.cta.button)

  // Footer
  setContent('footer.location', content.footer.location)
  setContent('footer.tagline', content.footer.tagline)
  setContent('footer.copyright', content.footer.copyright)
}

function setContent(key, value) {
  const el = document.querySelector(`[data-content="${key}"]`)
  if (el && value) {
    el.textContent = value
  }
}

function setHtml(key, value, className) {
  const el = document.querySelector(`[data-content="${key}"]`)
  if (el && value) {
    // Sanitize HTML before injection to prevent XSS
    let sanitized = sanitizeHtml(value)
    // Add class to paragraph tags if specified
    if (className) {
      sanitized = sanitized.replace(/<p>/g, `<p class="${className}">`)
    }
    el.innerHTML = sanitized
  }
}

// Initialize content injection
injectContent()

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear()

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const siblings = Array.from(entry.target.parentElement.children)
      const siblingIndex = siblings.indexOf(entry.target)
      entry.target.style.animationDelay = `${siblingIndex * 0.1}s`
      entry.target.classList.add('visible')
      observer.unobserve(entry.target)
    }
  })
}, observerOptions)

// Observe phases and services for scroll animation
document.querySelectorAll('.phase, .service').forEach(el => {
  observer.observe(el)
})

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute('href'))
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  })
})

// Header background on scroll
const header = document.querySelector('.site-header')

function updateHeaderBackground() {
  const currentScroll = window.pageYOffset
  const mode = document.documentElement.getAttribute('data-mode')
  const isLight = mode === 'light'

  if (currentScroll > 100) {
    header.style.background = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(10, 12, 15, 0.95)'
  } else {
    header.style.background = isLight
      ? 'linear-gradient(to bottom, rgba(255, 255, 255, 1), transparent)'
      : 'linear-gradient(to bottom, rgba(10, 12, 15, 1), transparent)'
  }
}

window.addEventListener('scroll', updateHeaderBackground, { passive: true })

// Also update header background when mode changes
const modeObserver = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-mode') {
      updateHeaderBackground()
    }
  })
})
modeObserver.observe(document.documentElement, { attributes: true })
