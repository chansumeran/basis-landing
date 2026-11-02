<script setup lang="ts">
// A stroked 24×24 line icon in the current text colour.
withDefaults(defineProps<{ d: string, size?: number, stroke?: number }>(), { size: 24, stroke: 1.7 })
</script>

<template>
  <svg viewBox="0 0 24 24" :width="size" :height="size" fill="none" stroke="currentColor" :stroke-width="stroke" stroke-linecap="round" stroke-linejoin="round" class="flex-none" aria-hidden="true">
    <path :d="d" />
  </svg>
</template>
