<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper.ts'
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: undefined,
  },
  author: {
    type: String,
    default: undefined,
  },
  role: {
    type: String,
    default: undefined,
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout quote" :style="style">
    <div class="my-auto mx-auto quote-body">
      <div class="quote-mark">"</div>
      <div class="quote-content">
        <slot />
      </div>
      <div v-if="author || role" class="quote-attribution">
        <span v-if="author" class="quote-author">{{ author }}</span>
        <span v-if="role" class="quote-role">{{ role }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quote {
  display: grid;
}

.quote-body {
  max-width: 48rem;
  position: relative;
}

.quote-mark {
  font-family: var(--bsf-font-serif);
  font-size: 8rem;
  line-height: 1;
  color: var(--bsf-accent);
  opacity: 0.3;
  position: absolute;
  top: -1rem;
  left: -3rem;
}

.quote-content :deep(p),
.quote-content :deep(*) {
  font-family: var(--bsf-font-serif);
  font-style: italic;
  font-size: 1.875rem;
  line-height: 1.4;
  color: var(--bsf-text);
}

.quote-attribution {
  margin-top: 2rem;
  font-family: var(--bsf-font-mono);
  font-size: 0.875rem;
  letter-spacing: 0.05em;
  color: var(--bsf-text-muted);
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.quote-attribution::before {
  content: '';
  width: 2rem;
  height: 1px;
  background: var(--bsf-accent);
}

.quote-author {
  color: var(--bsf-text);
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.quote-role {
  color: var(--bsf-text-subtle);
}

.quote-role::before {
  content: '·';
  margin-right: 0.5rem;
  color: var(--bsf-text-subtle);
}
</style>
