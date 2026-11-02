<script setup lang="ts">
import { CHART_H, CHART_W, ch } from '~/utils/landing'

// Each fill pops in as the drawn line reaches it (rp1–rp4 in landing.css).
const pops = ['rp1', 'rp2', 'rp3', 'rp4']
</script>

<template>
  <!-- The 6-second replay video of the trade: the price line draws left to right, fills pop in as
       they happen, the result is revealed at the end, and the player bar tracks the loop. With
       reduced motion it rests on the finished frame. -->
  <div class="flex size-full flex-col">
    <div class="flex items-center justify-between px-6 pt-5">
      <LandingShareSymbol />
      <span class="inline-flex h-6 items-center gap-1.5 rounded-full bg-s2 px-2.5 font-mono text-[10px] font-medium tracking-[.1em] text-f2">
        <span class="replay-rec size-1.5 rounded-full bg-dn" />REPLAY
      </span>
    </div>

    <div class="relative min-h-0 flex-1 px-6 pt-3">
      <svg :viewBox="`0 0 ${CHART_W} ${CHART_H}`" class="size-full overflow-visible" aria-hidden="true">
        <path :d="ch.entry" class="fill-none stroke-f2 [stroke-dasharray:5_4]" stroke-width="1" />
        <path :d="ch.stop" class="fill-none stroke-dn [stroke-dasharray:.5_4]" stroke-width="1.5" stroke-linecap="round" />
        <path :d="ch.target" class="fill-none stroke-up [stroke-dasharray:.5_4]" stroke-width="1.5" stroke-linecap="round" />
        <path :d="ch.line" class="replay-line fill-none stroke-fg" pathLength="1" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" />
        <circle v-for="(f, i) in ch.fills" :key="i" :cx="f.x" :cy="f.y" r="4.5" class="stroke-bg [paint-order:stroke]" :class="[f.cls.split(' ')[0], pops[i]]" stroke-width="3" />
      </svg>
      <div class="replay-reveal absolute top-3 right-6 flex flex-col items-end gap-0.5 rounded-xl bg-bg/80 px-3 py-2 backdrop-blur-sm">
        <span class="text-[11px] text-f2">Return on margin</span>
        <span class="num text-[30px] leading-none font-medium text-up">+18.60%</span>
      </div>
    </div>

    <div class="flex items-center gap-3 px-6 pt-2 pb-4">
      <svg viewBox="0 0 12 12" width="12" height="12" class="flex-none fill-fg" aria-hidden="true"><path d="M2 1.2v9.6L10.4 6z" /></svg>
      <div class="h-1 flex-1 overflow-hidden rounded-full bg-s2">
        <div class="replay-progress h-full rounded-full bg-fg" />
      </div>
      <span class="font-mono text-[11px] text-f2">0:06</span>
      <span class="flex items-center gap-1">
        <LandingBasisMark :size="20" />
        <span class="font-display text-[15px] font-extrabold tracking-[-.05em]">basis</span>
      </span>
    </div>
  </div>
</template>
