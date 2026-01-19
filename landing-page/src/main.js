/**
 * The Bootstrap Factory — Landing Page
 * Minimal, elegant JavaScript
 */

// Set current year in footer
document.getElementById('year').textContent = new Date().getFullYear()

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Stagger animation delay based on element index within its container
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
let lastScroll = 0

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset

  if (currentScroll > 100) {
    header.style.background = 'rgba(10, 12, 15, 0.95)'
  } else {
    header.style.background = 'linear-gradient(to bottom, rgba(10, 12, 15, 1), transparent)'
  }

  lastScroll = currentScroll
}, { passive: true })
