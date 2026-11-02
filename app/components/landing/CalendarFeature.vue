<script setup lang="ts">
import { calFeats } from '~/utils/landing'
</script>

<template>
  <section id="features" class="wrap pt-30 max-sm:pt-18">
    <!-- Phone left, copy right. Below md the copy column dissolves so the order becomes
         heading, phone, feature list. -->
    <div class="grid grid-cols-2 items-center gap-16 max-md:grid-cols-1 max-md:gap-10 max-sm:gap-7">
      <div class="reveal flex justify-center max-md:order-2 max-sm:[zoom:.74]">
        <LandingCalendarPhone data-par="0.14" />
      </div>
      <div class="flex flex-col gap-8 max-md:contents">
        <div class="reveal flex flex-col gap-4 max-md:order-1">
          <span class="eyebrow">P&amp;L calendar</span>
          <h2 class="h2">See your month at a glance.</h2>
          <p class="lead">Each trading day is tinted by what it made or lost, with the full amount on it, never rounded. The weeks add up underneath. A dot stays on a day until every trade in it is journaled.</p>
        </div>
        <div class="flex flex-col max-md:order-3">
          <div v-for="f in calFeats" :key="f.t" class="reveal flex items-start gap-4 border-t border-hair py-4">
            <LandingIcon :d="f.d" :size="22" class="mt-0.5 text-f2" />
            <div class="flex flex-col gap-1">
              <span class="text-[17px] font-semibold">{{ f.t }}</span>
              <span class="text-[15px] leading-[22px] text-f2">{{ f.b }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
