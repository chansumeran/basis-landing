<script setup lang="ts">
withDefaults(defineProps<{ size?: number }>(), { size: 22 })
</script>

<template>
  <div class="flex items-center gap-2.5">
    <span class="font-bold" :style="{ fontSize: `${size}px` }">SOLUSDT</span>
    <span class="inline-flex h-5 items-center rounded-md bg-s2 px-2 font-mono text-[10px] font-medium text-f2">LONG · 10×</span>
  </div>
</template>
