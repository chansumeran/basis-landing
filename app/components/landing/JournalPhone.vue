<script setup lang="ts">
import { cal, today } from '~/utils/landing'
</script>

<template>
  <!-- The Journal tab: balance, this month's results, the journaling backlog and today's trades. -->
  <LandingPhoneFrame>
    <div class="flex flex-col gap-4 px-4 pt-2">
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-1.5">
          <span class="text-[34px] leading-[41px] font-bold tracking-[.004em]">Journal</span>
          <span class="flex items-center gap-1.5 text-[14px] text-f2"><span class="size-1.5 rounded-full bg-up" />MEXC · OKX · synced just now</span>
        </div>
        <span class="hairline flex size-11 items-center justify-center rounded-full bg-s1 text-acc">
          <LandingIcon d="M19 12a7 7 0 1 1-2.05-4.95M19 4.5V8h-3.5" :size="19" :stroke="2.3" class="syncic" />
        </span>
      </div>

      <div class="hairline rounded-[18px] bg-s1 p-[18px]">
        <div class="flex items-center justify-between">
          <span class="text-[15px] text-f2">Balance</span>
          <span class="inline-flex h-[30px] items-center gap-1.5 rounded-full bg-s2 px-3 text-[14px] font-semibold">
            All exchanges <LandingIcon d="M6 9l6 6 6-6" :size="11" :stroke="3" class="text-f2" />
          </span>
        </div>
        <div class="num pt-2.5 text-[40px] leading-[48px] font-bold">$8,932<span class="text-f3">.10</span></div>
        <div class="mt-3.5 flex h-1.5 gap-1">
          <span class="grow-in w-[70.2%] rounded-[3px] bg-acc" />
          <span class="grow-in flex-1 rounded-[3px] bg-acc/30" />
        </div>
        <div class="flex justify-between pt-3 text-[14px]">
          <span class="flex items-center gap-1.5"><span class="size-2 rounded-[2px] bg-acc" /><span class="text-f2">MEXC</span><span class="num font-medium">6,273.39</span></span>
          <span class="flex items-center gap-1.5"><span class="size-2 rounded-[2px] bg-acc/30" /><span class="text-f2">OKX</span><span class="num font-medium">2,658.71</span></span>
        </div>
        <div class="my-4 h-[.5px] bg-hair" />
        <div class="grid grid-cols-3 gap-3">
          <div class="flex flex-col gap-1.5"><span class="text-[14px] text-f2">Oct net</span><span class="num text-[17px] font-semibold text-up">{{ cal.net }}</span></div>
          <div class="flex flex-col gap-1.5"><span class="text-[14px] text-f2">Win rate</span><span class="num text-[17px] font-semibold">61%</span></div>
          <div class="flex flex-col gap-1.5"><span class="text-[14px] text-f2">Trades</span><span class="num text-[17px] font-semibold">{{ cal.trades }}</span></div>
        </div>
      </div>

      <div class="flex">
        <LandingPhoneSegment />
      </div>

      <div class="flex items-center gap-3 rounded-xl bg-acc/8 px-3.5 py-3 inset-ring inset-ring-acc/30">
        <span class="num flex size-8 items-center justify-center rounded-full bg-accbg text-[15px] font-semibold text-acc">5</span>
        <div class="flex flex-1 flex-col gap-0.5">
          <span class="text-[16px] font-semibold">Trades to journal</span>
          <span class="text-[13px] text-f2">Add strategy, notes and mistakes</span>
        </div>
        <LandingIcon d="M9 5l7 7-7 7" :size="14" :stroke="2.6" class="text-f3" />
      </div>
    </div>

    <div class="flex items-center justify-between border-b-[.5px] border-hair px-4 pt-[22px] pb-2">
      <span class="text-[13px] font-medium tracking-[.04em] text-f3 uppercase">Today · Fri, Oct 23</span>
      <span class="num text-[13px] text-up">▲ +47.71</span>
    </div>
    <div v-for="r in today" :key="r.sym" class="rowin flex min-h-16 items-center gap-3 border-b-[.5px] border-hair px-4" :style="{ animationDelay: r.dl }">
      <span class="size-2 flex-none rounded-full" :class="r.dot" />
      <div class="flex min-w-0 flex-1 flex-col gap-1">
        <span class="flex items-center gap-2">
          <span class="text-[17px] font-semibold">{{ r.sym }}</span>
          <span class="inline-flex h-5 items-center rounded-[5px] bg-s2 px-1.5 font-mono text-[11px] font-medium text-f2">{{ r.badge }}</span>
        </span>
        <span class="text-[13px] text-f2">{{ r.sub }}</span>
      </div>
      <div class="flex flex-col items-end gap-1" :class="r.cls">
        <span class="num text-[17px] font-semibold">{{ r.pnl }}</span>
        <span class="num text-[13px]">{{ r.ret }}</span>
      </div>
    </div>

    <LandingPhoneTabBar :active="0" />
  </LandingPhoneFrame>
</template>
