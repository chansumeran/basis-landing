<script setup lang="ts">
import { mark, markSlow } from '~/utils/landing'

// The basis mark. `wave` ripples the bars, as on the sync screen; `slow` ripples over 3.2s instead of 1.3s.
const props = withDefaults(defineProps<{ size?: number, wave?: boolean, slow?: boolean }>(), { size: 36 })
const bars = computed(() => props.slow ? markSlow : mark)
</script>

<template>
  <svg viewBox="0 0 100 100" :width="size" :height="size" :class="{ wave }" aria-hidden="true">
    <rect v-for="(b, i) in bars" :key="i" :x="b.x" :y="b.y" :width="b.w" height="5.75" rx="1" :class="b.cls" :style="wave ? { animationDelay: b.dl, animationDuration: slow ? '3.2s' : undefined } : undefined" />
  </svg>
</template>
