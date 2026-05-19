<script setup lang="ts">
import { handleBackground } from '@slidev/client/layoutHelper.ts'
import { computed } from 'vue'

const props = defineProps({
  background: {
    type: String,
    default: undefined,
  },
  number: {
    type: [String, Number],
    default: undefined,
  },
  eyebrow: {
    type: String,
    default: undefined,
  },
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout section" :style="style">
    <div class="my-auto">
      <div v-if="number !== undefined" class="section-number">
        {{ String(number).padStart(2, '0') }}
      </div>
      <h6 v-if="eyebrow" class="section-eyebrow">{{ eyebrow }}</h6>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.section {
  display: grid;
}

.section-number {
  font-family: var(--bsf-font-mono);
  font-size: 6rem;
  font-weight: 700;
  line-height: 1;
  color: var(--bsf-accent);
  opacity: 0.25;
  margin-bottom: 1rem;
}

.section-eyebrow {
  margin-bottom: 0.75rem;
}
</style>
