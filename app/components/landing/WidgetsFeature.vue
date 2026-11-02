<script setup lang="ts">
import { CHART_H, CHART_W, cal, eq } from '~/utils/landing'

// A home-screen widget tile. On phones the small ones sit two across as squares and
// the wide one spans the row.
const tile = 'flex h-[170px] flex-none flex-col justify-between rounded-[22px] bg-bg p-4 text-left shadow-[0_0_0_1px_var(--color-hair),0_16px_32px_-20px_rgba(0,0,0,.16)] max-sm:w-auto max-sm:p-3.5'
</script>

<template>
  <section class="wrap pt-30 max-sm:pt-18">
    <div class="reveal hairline flex flex-col items-center gap-11 rounded-2xl bg-s1 px-10 py-14 text-center max-sm:items-start max-sm:px-4 max-sm:py-8 max-sm:text-left">
      <div class="flex max-w-[660px] flex-col items-center gap-4 max-sm:items-start">
        <span class="eyebrow">Widgets</span>
        <h2 class="h2">Today’s result, without opening the app.</h2>
        <p class="lead">Home and Lock Screen widgets show percentages by default, with dollar amounts if you want them. They show what the app last synced and never contact an exchange, so your keys stay in the app.</p>
      </div>

      <div class="flex flex-wrap items-start justify-center gap-5 max-sm:grid max-sm:w-full max-sm:grid-cols-2 max-sm:gap-3" role="img" aria-label="Today, To journal and This month widgets">
        <div :class="tile" class="w-[170px] max-sm:aspect-square max-sm:h-auto">
          <span class="text-[13px] font-semibold text-f2">Today</span>
          <div class="flex flex-col gap-1">
            <span class="num text-[30px] font-semibold text-up">▲ +0.5%</span>
            <span class="text-[12px] text-f3">4 trades · 2 to journal</span>
          </div>
          <span class="text-[11px] text-f3">synced 14:32</span>
        </div>

        <div :class="tile" class="w-[170px] max-sm:aspect-square max-sm:h-auto">
          <div class="flex items-center justify-between">
            <span class="text-[13px] font-semibold text-f2">To journal</span>
            <span class="size-2 rounded-full bg-acc" />
          </div>
          <span class="num text-[40px] leading-10 font-semibold">5</span>
          <div class="flex flex-col gap-0.5">
            <span class="text-[13px] font-semibold">SOLUSDT</span>
            <span class="num text-[12px] text-up">▲ +18.6%</span>
          </div>
        </div>

        <div :class="tile" class="w-[364px] max-sm:col-span-full max-sm:h-[156px]">
          <div class="flex items-center justify-between">
            <span class="text-[13px] font-semibold text-f2">This month</span>
            <span class="text-[11px] text-f3">synced 14:32</span>
          </div>
          <div class="flex items-end gap-4">
            <div class="flex flex-none flex-col gap-1.5">
              <span class="num text-[26px] font-semibold text-up">▲ +12.7%</span>
              <span class="flex gap-2.5 text-[12px] text-f3"><span>61% win</span><span>{{ cal.trades }} trades</span><span>PF 1.64</span></span>
            </div>
            <svg :viewBox="`0 0 ${CHART_W} ${CHART_H}`" width="130" height="60" preserveAspectRatio="none" class="flex-1" aria-hidden="true">
              <path :d="eq.line" class="fill-none stroke-up [vector-effect:non-scaling-stroke]" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </div>
          <span class="text-[11px] text-f3">{{ cal.days }} trading days</span>
        </div>
      </div>
    </div>
  </section>
</template>
