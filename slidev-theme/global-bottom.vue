<script setup lang="ts">
import { useNav } from '@slidev/client'
import { computed } from 'vue'
import Logo from './components/Logo.vue'

const { currentSlideRoute, currentLayout } = useNav()

// Layouts that own their own branding (top copper rule, large headline).
// Footer is suppressed there by default but can be re-enabled per-slide
// via `include-logo: true` in the slide's frontmatter.
const HIDDEN_LAYOUTS = ['cover', 'intro']

const showLogo = computed(() => {
  // $frontmatter is empty in global layers; reach into the route's slide meta.
  const fm = (currentSlideRoute.value?.meta?.slide?.frontmatter ?? {}) as Record<string, unknown>
  const override = fm['include-logo']
  if (typeof override === 'boolean')
    return override
  return !HIDDEN_LAYOUTS.includes(currentLayout.value)
})
</script>

<template>
  <footer
    v-if="showLogo"
    class="bsf-footer"
    aria-hidden="true"
  >
    <Logo class="bsf-footer-mark" />
    <span class="bsf-footer-text">bsf5y</span>
  </footer>
</template>

<style scoped>
.bsf-footer {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  z-index: 5;
  pointer-events: none;
  color: var(--bsf-text-subtle);
}

.bsf-footer-mark {
  height: 1.5rem;
  flex: none;
}

.bsf-footer-text {
  font-family: var(--bsf-font-mono);
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: lowercase;
  color: var(--bsf-text-subtle);
}
</style>
