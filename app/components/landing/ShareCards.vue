<script setup lang="ts">
const chips = ['Portrait 4:5', 'Landscape 16:9', 'Dark or light', '6-second replay video', 'Save to Photos']

// Each row of cards sits side by side; below xl it becomes a swipeable, snapping carousel.
const carousel = 'flex items-start justify-center gap-6 max-xl:-mx-4 max-xl:snap-x max-xl:snap-mandatory max-xl:scroll-px-8 max-xl:justify-start max-xl:overflow-x-auto max-xl:overflow-y-hidden max-xl:overscroll-x-contain max-xl:px-8 max-xl:pt-1 max-xl:pb-6 max-xl:[scrollbar-width:none] max-xl:[touch-action:pan-x_pan-y] max-sm:gap-4 [&::-webkit-scrollbar]:hidden'
</script>

<template>
  <section id="share" class="wrap flex flex-col gap-12 pt-30 max-sm:pt-18">
    <div class="reveal mx-auto flex max-w-[760px] flex-col items-center gap-4 text-center max-sm:mx-0 max-sm:items-start max-sm:text-left">
      <span class="eyebrow">Share cards</span>
      <h2 class="h2">Post the trade, not your balance.</h2>
      <p class="lead">Turn a trade, a calendar month or an analysis range into a card in three designs. Cards show your return, never your size or account. Dollar amounts stay off unless you turn them on.</p>
      <div class="flex flex-wrap justify-center gap-2 pt-2 max-sm:justify-start">
        <span v-for="c in chips" :key="c" class="inline-flex h-[30px] items-center rounded-full bg-s2 px-3 text-[13px] font-medium text-f2">{{ c }}</span>
      </div>
    </div>

    <!-- The three portrait designs. -->
    <div class="shares" :class="carousel" role="img" aria-label="The same SOLUSDT trade as three share cards: Classic, Bold and Chart, each showing a +18.60% return on margin">
      <LandingShareCard label="Classic" :par="0.05" card-class="px-[26px] pt-7 pb-[22px]">
        <LandingShareHead />
        <div class="pt-[22px]"><LandingShareSymbol :size="30" /></div>
        <div class="mt-4 flex min-h-0 flex-1 flex-col rounded-[18px] bg-up/10 p-[18px] inset-ring inset-ring-up/22">
          <span class="text-[11px] text-f2">Return on margin</span>
          <div class="pt-1"><LandingShareReturn /></div>
          <div class="min-h-9 flex-1 pt-3"><LandingShareSpark /></div>
        </div>
        <div class="pt-[18px]"><LandingShareStats :cols="2" /></div>
        <div class="pt-[18px]"><LandingShareFoot /></div>
      </LandingShareCard>

      <LandingShareCard label="Bold" :par="0.12" card-class="px-[26px] pt-7 pb-[22px] bg-linear-to-b from-up/18 via-transparent via-50% to-transparent">
        <LandingShareHead />
        <div class="flex-1" />
        <div class="flex flex-col items-center gap-3">
          <LandingShareSymbol />
          <span class="text-[11px] text-f2">Return on margin</span>
          <LandingShareReturn big />
        </div>
        <div class="flex-1" />
        <div class="h-[58px]"><LandingShareSpark /></div>
        <div class="h-[18px]" />
        <LandingShareStats center />
        <div class="h-[18px]" />
        <LandingShareFoot />
      </LandingShareCard>

      <LandingShareCard label="Chart" :par="0.05" card-class="pt-7 pb-[22px]">
        <div class="px-[26px]">
          <LandingShareHead />
          <div class="pt-[22px]"><LandingShareSymbol /></div>
          <div class="flex flex-col gap-1 pt-3">
            <span class="text-[11px] text-f2">Return on margin</span>
            <LandingShareReturn />
          </div>
        </div>
        <div class="min-h-0 flex-1 py-2"><LandingShareSpark /></div>
        <div class="px-[26px]">
          <LandingShareStats />
          <div class="pt-4"><LandingShareFoot /></div>
        </div>
      </LandingShareCard>
    </div>

    <!-- The 16:9 format and the 6-second replay video of the same trade. Too wide to swipe
         through on phones, so there they stack instead. -->
    <div class="shares -mt-4 max-sm:mx-0 max-sm:snap-none max-sm:flex-col max-sm:items-center max-sm:gap-8 max-sm:overflow-visible max-sm:px-0" :class="carousel" role="img" aria-label="The SOLUSDT trade as a landscape 16:9 card, and as a 6-second replay video that draws the price, marks each fill and ends on the +18.60% return">
      <LandingShareCard label="Landscape 16:9" :par="0.08" landscape card-class="p-6">
        <LandingShareHead />
        <div class="mt-4 flex min-h-0 flex-1 gap-5">
          <div class="flex w-[236px] flex-none flex-col justify-between">
            <div class="flex flex-col gap-2.5">
              <LandingShareSymbol />
              <div class="flex flex-col gap-1">
                <span class="text-[11px] text-f2">Return on margin</span>
                <LandingShareReturn />
              </div>
            </div>
            <LandingShareStats />
          </div>
          <div class="flex min-w-0 flex-1 rounded-[18px] bg-up/10 p-4 inset-ring inset-ring-up/22">
            <LandingShareSpark />
          </div>
        </div>
        <div class="pt-4"><LandingShareFoot /></div>
      </LandingShareCard>

      <LandingShareCard label="Replay video · 6 s" :par="0.08" landscape>
        <LandingShareReplay />
      </LandingShareCard>
    </div>
  </section>
</template>
