<script setup lang="ts">
import { CHART_H, CHART_W, cal, eq } from '~/utils/landing'
</script>

<template>
  <div class="hairline flex flex-col gap-1 rounded-2xl bg-s1 p-4">
    <span class="text-[14px] text-f2">Net P&amp;L · Oct 1–23</span>
    <span class="flex items-baseline gap-2">
      <span class="num text-[40px] leading-[48px] font-medium text-up">{{ cal.net }}</span>
      <span class="text-[13px] font-medium text-f2">USDT</span>
    </span>
    <span class="text-[14px] text-f2">{{ cal.trades }} trades · after fees and funding</span>
    <!-- The equity curve draws in on scroll; the drawdown shading and label fade in after it. -->
    <svg :viewBox="`0 0 ${CHART_W} ${CHART_H}`" :width="CHART_W" :height="CHART_H" class="mt-3.5 overflow-visible" aria-hidden="true">
      <path :d="eq.zero" class="fill-none stroke-f3/50 [stroke-dasharray:3_3]" stroke-width="1" />
      <path :d="eq.dd" class="fadev fill-dn/16" />
      <path :d="eq.rule" class="fadev fill-none stroke-dn/60" stroke-width="1" />
      <text :x="eq.lx" :y="eq.ly" class="fadev fill-dn font-mono text-[10.5px] font-semibold">{{ eq.label }}</text>
      <path :d="eq.line" class="drawv fill-none stroke-up" pathLength="1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </svg>
  </div>
  <div class="grid grid-cols-2 gap-2.5">
    <div class="hairline flex flex-col gap-2 rounded-2xl bg-s1 p-3.5">
      <span class="text-[14px] text-f2">Win rate</span>
      <span class="num text-[22px] font-bold">61%</span>
      <div class="flex h-[5px] gap-0.5">
        <span class="growv w-[61%] rounded-[3px] bg-up" />
        <span class="growv flex-1 rounded-[3px] bg-dn/55" />
      </div>
      <span class="text-[13px] text-f3">14 wins · 9 losses</span>
    </div>
    <div class="hairline flex flex-col gap-2 rounded-2xl bg-s1 p-3.5">
      <span class="text-[14px] text-f2">Profit factor</span>
      <span class="num text-[22px] font-bold text-up">1.64</span>
      <!-- The tick in the middle marks break-even. -->
      <div class="relative h-[5px] rounded-[3px] bg-s2">
        <span class="growv absolute inset-y-0 left-0 w-[82%] rounded-[3px] bg-up" />
        <span class="absolute -top-[3px] left-[calc(50%-1px)] h-[11px] w-0.5 bg-f2" />
      </div>
      <span class="text-[13px] text-f3">Break-even is 1.00</span>
    </div>
  </div>
</template>
