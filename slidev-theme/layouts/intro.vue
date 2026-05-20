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
})

const style = computed(() => handleBackground(props.background))
</script>

<template>
  <div class="slidev-layout intro" :style="style">
    <div class="intro-content">
      <h6 v-if="eyebrow" class="intro-eyebrow">{{ eyebrow }}</h6>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.intro-content {
  align-self: start;
  padding-top: 4rem;
}

.intro-eyebrow {
  margin-bottom: 1.25rem;
}
</style>
