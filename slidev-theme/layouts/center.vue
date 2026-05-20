<script setup lang="ts">
defineProps({
  eyebrow: {
    type: String,
    default: undefined,
  },
})
</script>

<template>
  <div class="slidev-layout center h-full grid place-content-center">
    <div class="my-auto">
      <h6 v-if="eyebrow" class="center-eyebrow">{{ eyebrow }}</h6>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.center-eyebrow {
  margin-bottom: 0.75rem;
}
</style>
