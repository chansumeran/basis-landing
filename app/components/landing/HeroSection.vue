<script setup lang="ts">
import { exchangesAnd, vrows } from '~/utils/landing'
</script>

<template>
  <!-- The hook classes (vbars, sl/sr, hero-copy, p1/p2, floaty) drive the entrance animations and the
       scroll parallax in landing.css. -->
  <section id="top" class="relative overflow-hidden pb-2">
    <!-- Volume-profile rows stepping in from both edges into a V. -->
    <div class="vbars pointer-events-none absolute inset-x-0 top-0 h-[760px] max-sm:opacity-45" aria-hidden="true">
      <div v-for="(r, i) in vrows" :key="i" class="absolute inset-x-0 h-8" :style="{ top: `${r.y}px` }">
        <span class="sl absolute inset-x-0 top-0 h-8"><span class="vl hairline absolute top-0 left-0 h-8 rounded-r-md" :class="r.cls" :style="{ width: r.l, animationDelay: r.dl }" /></span>
        <span class="sr absolute inset-x-0 top-0 h-8"><span class="vr hairline absolute top-0 right-0 h-8 rounded-l-md" :class="r.cls" :style="{ width: r.r, animationDelay: r.dl }" /></span>
      </div>
    </div>

    <div class="wrap hero-copy relative z-[1] flex flex-col items-center gap-7 pt-[104px] text-center max-sm:gap-5 max-sm:pt-14">
      <span class="eyebrow in1">Crypto trading journal for iOS</span>
      <h1 class="in2 max-w-[920px] text-[72px] leading-[74px] font-bold tracking-[-.04em] max-sm:text-[44px] max-sm:leading-[48px]">Every trade, journaled. Nothing leaves your phone.</h1>
      <p class="lead in3 max-w-[540px]">basis imports your {{ exchangesAnd }} trades with a read-only API key and keeps them encrypted on your phone. You only write the part the exchange can’t: the plan, the rules you kept, and what it cost when you didn’t.</p>
      <div class="in4 flex flex-wrap justify-center gap-3 max-sm:w-full max-sm:flex-col">
        <a href="#download" class="btn max-sm:w-full">
          <LandingIcon d="M12 4v11M7 10.5l5 5 5-5M5 19.5h14" :size="20" :stroke="2" />
          Get basis for iOS
        </a>
        <a href="#how" class="btn2 max-sm:w-full">How it works</a>
      </div>
      <span class="in5 text-[14px] text-f3">iOS 17 or later · No sign-up · No cloud</span>
    </div>

    <div class="relative z-[1] mx-auto mt-10 flex h-[720px] items-start justify-center gap-5 overflow-hidden px-4 mask-b-from-62% max-sm:mt-6 max-sm:h-[640px] max-sm:[zoom:.74]" role="img" aria-label="The basis Journal with balance, this month’s results and trades to journal, and a SOLUSDT trade with its price chart, fills, planned stop and target">
      <div class="p1 mt-16 max-sm:mt-6"><div class="floaty"><LandingJournalPhone /></div></div>
      <div class="p2 max-md:hidden"><div class="floaty"><LandingTradePhone /></div></div>
    </div>
  </section>
</template>
