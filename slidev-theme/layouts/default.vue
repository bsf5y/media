<script setup lang="ts">
defineProps({
  eyebrow: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <div class="slidev-layout default">
    <h6 v-if="eyebrow" class="default-eyebrow">{{ eyebrow }}</h6>
    <slot />
  </div>
</template>

<style scoped>
.default-eyebrow {
  margin-bottom: 0.75rem;
}
</style>
