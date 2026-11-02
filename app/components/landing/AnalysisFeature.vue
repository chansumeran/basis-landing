<script setup lang="ts">
import { anaFeats, type AnalysisTab } from '~/utils/landing'

const tab = ref<AnalysisTab>('Overview')
</script>

<template>
  <section class="wrap pt-30 max-sm:pt-18">
    <!-- Copy left, phone right. Below md the copy column dissolves so the order becomes
         heading, section picker, phone. -->
    <div class="grid grid-cols-2 items-center gap-16 max-md:grid-cols-1 max-md:gap-10 max-sm:gap-7">
      <div class="reveal order-2 flex justify-center max-md:order-3 max-sm:[zoom:.74]">
        <LandingAnalysisPhone v-model="tab" data-par="0.14" />
      </div>
      <div class="flex flex-col gap-8 max-md:contents">
        <div class="reveal flex flex-col gap-4 max-md:order-1">
          <span class="eyebrow">Analysis</span>
          <h2 class="h2">Find the pattern, not just the P&amp;L.</h2>
          <p class="lead">Six sections, one range, one filter. Your journal feeds the stats, so basis can show whether following your rules pays, and how much of each move you actually keep.</p>
          <span class="flex items-center gap-2 text-[14px] text-f3">
            <LandingIcon d="M9 11V5.5a1.5 1.5 0 0 1 3 0V11M12 10V9a1.5 1.5 0 0 1 3 0v2M15 10.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-.5a6 6 0 0 1-5-2.7L4 15a1.5 1.5 0 0 1 2.5-1.6L9 16" :size="16" />
            Pick a section to see it on the phone.
          </span>
        </div>

        <!-- Section picker: two columns of descriptions on desktop, a 3 × 2 grid of chips on phones. -->
        <div class="-mx-4 grid grid-cols-2 gap-2 max-md:order-2 max-sm:mx-0 max-sm:grid-cols-3" role="tablist" aria-label="Show an Analysis section on the phone">
          <button
            v-for="f in anaFeats"
            :key="f.t"
            type="button"
            role="tab"
            :aria-selected="f.t === tab"
            class="reveal group flex min-w-0 cursor-pointer flex-col gap-1.5 rounded-[14px] px-4 py-3.5 text-left transition-[background-color,box-shadow] duration-200 hover:bg-s1 focus-visible:shadow-[0_0_0_2px_var(--color-acc)] focus-visible:outline-none aria-selected:bg-s1 aria-selected:inset-ring aria-selected:inset-ring-acc/45 max-sm:h-11 max-sm:items-center max-sm:justify-center max-sm:rounded-xl max-sm:bg-s1 max-sm:px-1.5 max-sm:py-0 max-sm:not-aria-selected:hairline"
            @click="tab = f.t"
          >
            <span class="flex items-center gap-2 text-[17px] font-semibold text-fg group-aria-selected:text-acc max-sm:justify-center max-sm:text-center max-sm:text-[14px]">
              {{ f.t }}
              <LandingIcon d="M5 12h13M13 6l6 6-6 6" :size="16" :stroke="2.2" class="-translate-x-1 text-acc opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-aria-selected:translate-x-0 group-aria-selected:opacity-100 max-sm:hidden" />
            </span>
            <span class="text-[15px] leading-[22px] text-f2 max-sm:hidden">{{ f.b }}</span>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
