<script setup lang="ts">
export type IconName = "check" | "x" | "warn" | "arrow" | "lang" | "screen" | "hdr" | "bag" | "sun" | "moon" | "logo";

withDefaults(defineProps<{ name: IconName; size?: number; width?: number }>(), { size: 18, width: undefined });
</script>

<template>
  <svg :width="width ?? size" :height="size" aria-hidden="true" focusable="false"><use :href="`#i-${name}`" /></svg>
</template>
