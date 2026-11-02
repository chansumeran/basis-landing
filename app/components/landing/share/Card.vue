<script setup lang="ts">
// One share card with its design name underneath: the app's portrait card (360 × 450, 4:5) or,
// with `landscape`, its 16:9 format (544 × 306). `par` is the parallax drift; `cardClass` sets
// the card's padding and background.
defineProps<{ label: string, par: number, cardClass?: string, landscape?: boolean }>()
</script>

<template>
  <div class="reveal flex snap-center snap-always flex-col items-center gap-3.5">
    <!-- Scaled down on phones; the landscape formats shrink further to fit the screen width. -->
    <div :data-par="par" :class="landscape ? 'max-sm:[zoom:.63]' : 'max-sm:[zoom:.82]'">
      <div class="relative flex flex-none flex-col overflow-hidden rounded-[20px] bg-bg text-left text-fg shadow-[0_0_0_1px_var(--color-hair),0_24px_48px_-28px_rgba(0,0,0,.18)]" :class="[landscape ? 'h-[306px] w-[544px]' : 'h-[450px] w-[360px]', cardClass]">
        <slot />
      </div>
    </div>
    <span class="text-[14px] font-medium text-f3">{{ label }}</span>
  </div>
</template>
