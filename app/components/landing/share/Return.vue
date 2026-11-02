<script setup lang="ts">
// The headline return with its up triangle. `big` is the Bold card's larger size.
defineProps<{ big?: boolean }>()
</script>

<template>
  <div class="flex items-center text-up" :class="big ? 'gap-[25px]' : 'gap-[18px]'">
    <svg viewBox="0 0 30 26" :width="big ? 42 : 30" :height="big ? 36 : 26" class="fill-up" aria-hidden="true"><path d="M15 0L30 26H0Z" /></svg>
    <span class="num leading-none font-medium" :class="big ? 'text-[64px]' : 'text-[46px]'">+18.60%</span>
  </div>
</template>
