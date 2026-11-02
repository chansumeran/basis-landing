<script setup lang="ts">
import { cal, cells, weekdays, weeks } from '~/utils/landing'
</script>

<template>
  <!-- The P&L calendar: each trading day tinted by its result, then the weeks and their totals. -->
  <LandingPhoneFrame role="img" aria-label="The P&L calendar for October 2026: each trading day tinted by its profit or loss, with the weeks and their totals below">
    <div class="flex flex-col gap-3.5 px-4 pt-2">
      <div class="flex items-start justify-between">
        <div class="flex flex-col gap-1">
          <span class="flex items-baseline gap-2 text-[34px] leading-[41px]">
            <span class="font-bold tracking-[.004em]">October</span>
            <span class="text-f3">2026</span>
          </span>
          <span class="flex gap-1.5 text-[15px]">
            <span class="num font-semibold text-up">{{ cal.net }}</span>
            <span class="text-f2">USDT · {{ cal.days }} trading days</span>
          </span>
        </div>
        <div class="flex gap-2.5 pt-1.5">
          <span class="flex size-10 items-center justify-center rounded-full bg-s1"><LandingIcon d="M15 5l-7 7 7 7" :size="16" :stroke="2.4" /></span>
          <span class="flex size-10 items-center justify-center rounded-full bg-s1 text-f3 opacity-60"><LandingIcon d="M9 5l7 7-7 7" :size="16" :stroke="2.4" /></span>
        </div>
      </div>

      <div class="flex gap-2.5">
        <LandingPhoneSegment />
        <span class="flex h-8 w-11 items-center justify-center rounded-[10px] bg-s1 text-acc">
          <LandingIcon d="M12 3.5v11M8 7.5l4-4 4 4M7 11H5.5v9.5h13V11H17" :size="17" />
        </span>
      </div>

      <div class="grid grid-cols-7 gap-x-1 gap-y-1.5">
        <span v-for="(w, i) in weekdays" :key="`w${i}`" class="h-5 text-center text-[11px] leading-5 font-medium text-f3">{{ w }}</span>
        <!-- On phones the amounts are hidden and the day numbers grow slightly. -->
        <div v-for="(d, i) in cells" :key="i" class="pop relative flex h-[52px] min-w-0 flex-col items-center justify-center gap-0.5 rounded-[11px]" :class="d.cls" :style="{ background: d.tint || undefined }">
          <span class="text-[15px] leading-[18px] max-sm:text-[16px]">{{ d.n }}</span>
          <span v-if="d.amt" class="num text-[9.5px] leading-3 font-semibold whitespace-nowrap max-sm:hidden">{{ d.amt }}</span>
          <span v-if="d.dot" class="absolute top-1.5 right-1.5 size-[5px] rounded-full bg-fg" />
        </div>
      </div>

      <div class="flex items-center gap-1.5 text-[12px] text-f2">
        <span>Loss</span>
        <span class="h-2 w-3.5 rounded-[2px] bg-dn/60" />
        <span class="h-2 w-3.5 rounded-[2px] bg-dn/18" />
        <span class="h-2 w-3.5 rounded-[2px] bg-up/18" />
        <span class="h-2 w-3.5 rounded-[2px] bg-up/60" />
        <span>Profit</span>
        <span class="flex-1" />
        <span class="size-[5px] rounded-full bg-fg" />
        <span>Unjournaled</span>
      </div>

      <div class="flex justify-between px-1 pt-1">
        <span class="text-[13px] font-medium tracking-[.04em] text-f3 uppercase">Weeks</span>
        <span class="text-[13px] text-f3">Sun – Sat</span>
      </div>
      <div class="hairline rounded-2xl bg-s1 px-4">
        <div v-for="wk in weeks" :key="wk.l" class="pop flex min-h-12 items-center gap-2.5 border-b-[.5px] border-hair">
          <span class="text-[16px] font-medium">{{ wk.l }}</span>
          <span v-if="wk.now" class="inline-flex h-[22px] items-center rounded-md bg-accbg px-[7px] text-[12px] font-semibold text-acc">This week</span>
          <span class="flex-1" />
          <span class="text-[13px] text-f3">{{ wk.t }}</span>
          <span class="num min-w-[84px] text-right text-[15px] font-semibold" :class="wk.cls">{{ wk.amt }}</span>
        </div>
      </div>
    </div>

    <LandingPhoneTabBar :active="1" />
  </LandingPhoneFrame>
</template>
