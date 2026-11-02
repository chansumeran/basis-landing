<script setup lang="ts">
import { CHART_H, CHART_W, ch, facts } from '~/utils/landing'
</script>

<template>
  <!-- Position detail for a SOLUSDT long: net P&L, the price chart with fills, MAE/MFE and the trade facts. -->
  <LandingPhoneFrame>
    <div class="flex h-11 flex-none items-center justify-between px-1">
      <span class="inline-flex h-11 items-center gap-0.5 pr-2 pl-1 text-[17px] text-acc">
        <LandingIcon d="M15 5l-7 7 7 7" :stroke="2.2" />Journal
      </span>
      <div class="flex flex-col items-center">
        <span class="text-[17px] leading-5 font-semibold">SOLUSDT</span>
        <span class="text-[12px] text-f2">Long 10× · Perp · MEXC</span>
      </div>
      <span class="inline-flex h-11 w-[92px] items-center justify-end px-2 text-acc">
        <LandingIcon d="M12 3.5v11M8 7.5l4-4 4 4M7 11H5.5v9.5h13V11H17" :size="22" />
      </span>
    </div>

    <div class="flex flex-col items-center gap-2 px-4 pt-4">
      <span class="text-[15px] text-f2">Net P&amp;L</span>
      <span class="flex items-baseline gap-1.5 text-up">
        <span class="num text-[52px] leading-[58px] font-bold">+113.72</span>
        <span class="num text-[17px] font-semibold">USDT</span>
      </span>
      <span class="flex items-center gap-2.5">
        <span class="num inline-flex h-6 items-center rounded-[7px] bg-upbg px-2 text-[13px] font-semibold text-up">+18.6% ROE</span>
        <span class="text-[14px] text-f2">Oct 23 · held 3h 42m</span>
      </span>
    </div>

    <div class="mx-4 mt-6 flex flex-col gap-3 rounded-[14px] bg-s1 p-4 inset-ring inset-ring-hair">
      <svg :viewBox="`0 0 ${CHART_W} ${CHART_H}`" :width="CHART_W" :height="CHART_H" class="overflow-visible" aria-hidden="true">
        <path :d="ch.entry" class="fill-none stroke-f2 [stroke-dasharray:5_4]" stroke-width="1" />
        <path :d="ch.stop" class="fill-none stroke-dn [stroke-dasharray:.5_4]" stroke-width="1.5" stroke-linecap="round" />
        <path :d="ch.target" class="fill-none stroke-up [stroke-dasharray:.5_4]" stroke-width="1.5" stroke-linecap="round" />
        <path :d="ch.line" class="drawloop fill-none stroke-f2" pathLength="1" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        <circle v-for="(f, i) in ch.fills" :key="i" :cx="f.x" :cy="f.y" r="4.5" class="stroke-s1 [paint-order:stroke]" :class="f.cls" stroke-width="3" />
      </svg>
      <div class="flex items-center gap-3.5 text-[12px] whitespace-nowrap text-f2">
        <span class="flex items-center gap-1.5"><span class="size-2 rounded-full bg-up" />Buy</span>
        <span class="flex items-center gap-1.5"><span class="size-2 rounded-full bg-amber" />Sell</span>
        <span class="flex items-center gap-1.5"><svg width="14" height="2" aria-hidden="true"><path d="M0 1H14" class="stroke-f2 [stroke-dasharray:3_3]" stroke-width="1.5" /></svg>Entry 152.84</span>
        <span class="flex items-center gap-1.5"><svg width="14" height="2" aria-hidden="true"><path d="M1 1H13" class="stroke-dn [stroke-dasharray:1_3]" stroke-width="1.5" stroke-linecap="round" /></svg>Stop</span>
        <span class="flex items-center gap-1.5"><svg width="14" height="2" aria-hidden="true"><path d="M1 1H13" class="stroke-up [stroke-dasharray:1_3]" stroke-width="1.5" stroke-linecap="round" /></svg>Target</span>
      </div>
    </div>

    <div class="flex flex-col gap-2 px-4 pt-6">
      <div class="flex items-baseline justify-between">
        <span class="text-[16px] font-semibold">Captured 65% of the move</span>
        <span class="num text-[13px] font-semibold text-up">+1.47R</span>
      </div>
      <!-- MAE in red, the full move in faded green, the captured part in green, the exit as a tick. -->
      <div class="relative flex h-3.5 items-center">
        <div class="absolute inset-x-0 h-1.5 rounded-[3px] bg-s2" />
        <div class="grow-in absolute left-0 h-1.5 w-[16.7%] rounded-l-[3px] bg-dn/55" />
        <div class="grow-in absolute left-[16.7%] h-1.5 w-[83.3%] rounded-r-[3px] bg-up/35" />
        <div class="grow-in absolute left-[16.7%] h-1.5 w-[54%] bg-up" />
        <div class="absolute left-[70.7%] h-3.5 w-0.5 rounded-[1px] bg-fg" />
      </div>
      <div class="num flex justify-between text-[13px]">
        <span class="text-dn">MAE −35.70</span>
        <span class="text-up">MFE +178.48</span>
      </div>
    </div>

    <div class="hairline mx-4 mt-6 rounded-2xl bg-s1">
      <div v-for="f in facts" :key="f.l" class="flex min-h-12 items-center justify-between border-b-[.5px] border-hair px-4 text-[15px]">
        <span class="text-f2">{{ f.l }}</span>
        <span class="num font-semibold">{{ f.v }}</span>
      </div>
    </div>

    <div class="absolute inset-x-0 bottom-0 flex flex-col items-center gap-2 bg-bg px-4 pt-3.5 pb-[30px] shadow-[0_-.5px_0_var(--color-hair)]">
      <span class="flex h-[54px] w-full items-center justify-center rounded-2xl bg-acc text-[17px] font-semibold text-onacc">Journal this trade</span>
      <span class="text-[13px] text-f2">Strategy, notes and mistakes</span>
    </div>
  </LandingPhoneFrame>
</template>
