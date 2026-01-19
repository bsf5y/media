/**
 * The Bootstrap Factory — Landing Page
 * Content injection and interactions
 */

import content from './content/content.json'

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
    // Add class to paragraph tags if specified
    if (className) {
      el.innerHTML = value.replace(/<p>/g, `<p class="${className}">`)
    } else {
      el.innerHTML = value
    }
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

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.background = 'rgba(10, 12, 15, 0.95)'
  } else {
    header.style.background = 'linear-gradient(to bottom, rgba(10, 12, 15, 1), transparent)'
  }
}, { passive: true })
