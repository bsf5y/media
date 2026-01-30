/**
 * The Bootstrap Factory — Landing Page
 * Interactions only (content rendered at build time by Eleventy)
 */

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

// URL-based dev detection (works with Eleventy dev server)
const isDev = window.location.hostname === 'localhost'
           || window.location.hostname === '127.0.0.1'

if (isDev) {
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

/* ============================================
   Scroll Animations
   ============================================ */

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

/* ============================================
   Smooth Scroll
   ============================================ */

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

/* ============================================
   Header Scroll Behavior
   ============================================ */

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
