<script setup lang="ts">
import { steps } from '~/utils/landing'
</script>

<template>
  <section id="how" class="wrap pt-30 max-sm:pt-18">
    <div class="grid grid-cols-2 items-center gap-16 max-md:grid-cols-1 max-md:gap-10 max-sm:gap-7">
      <div class="flex flex-col gap-8">
        <div class="reveal flex flex-col gap-4">
          <span class="eyebrow">How it works</span>
          <h2 class="h2">The exchange fills in the numbers. You fill in the why.</h2>
        </div>
        <div class="flex flex-col">
          <div v-for="s in steps" :key="s.n" class="reveal flex gap-4 border-t border-hair py-5 max-sm:py-4">
            <span class="num w-[22px] flex-none pt-1 text-[13px] font-semibold text-f3">{{ s.n }}</span>
            <div class="flex flex-col gap-1.5">
              <h3 class="text-[21px] leading-[27px] font-bold tracking-[-.01em]">{{ s.t }}</h3>
              <p class="text-[16px] leading-6 text-f2">{{ s.b }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="reveal flex justify-center max-sm:[zoom:.74]">
        <LandingSyncPhone data-par="0.14" />
      </div>
    </div>
  </section>
</template>
