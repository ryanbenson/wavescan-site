<script setup lang="ts">
import AppIcon from "./AppIcon.vue";
</script>

<template>
  <a class="brand" href="#top"><AppIcon name="logo" :size="28" />Wavescan</a>
</template>

<style scoped>
.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--display);
  font-weight: 700;
  font-size: 1.25rem;
  color: var(--fg);
  text-decoration: none;
  letter-spacing: 0.03em;
}
</style>
