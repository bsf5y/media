<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper.ts'
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: undefined,
  },
  eyebrow: {
    type: String,
    default: undefined,
  },
  footnote: {
    type: String,
    default: undefined,
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout cover" :style="style">
    <div class="my-auto w-full">
      <h6 v-if="eyebrow" class="cover-eyebrow">{{ eyebrow }}</h6>
      <slot />
      <div v-if="footnote || $slots.footnote" class="cover-footnote">
        <slot name="footnote">{{ footnote }}</slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cover-eyebrow {
  margin-bottom: 1.25rem;
}

.cover-footnote {
  margin-top: 2rem;
  font-family: var(--bsf-font-mono);
  font-size: 0.75rem;
  letter-spacing: 0.05em;
  color: var(--bsf-text-subtle);
}
</style>
