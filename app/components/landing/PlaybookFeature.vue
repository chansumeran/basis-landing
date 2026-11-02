<script setup lang="ts">
import { mist, strats } from '~/utils/landing'
</script>

<template>
  <section class="wrap pt-30 max-sm:pt-18">
    <div class="grid grid-cols-2 items-center gap-16 max-md:grid-cols-1 max-md:gap-10 max-sm:gap-7">
      <div class="reveal flex flex-col gap-4">
        <span class="eyebrow">Playbook</span>
        <h2 class="h2">Put a number on every mistake.</h2>
        <p class="lead">Write each strategy as a rule checklist and tick it off when you journal. Tag what went wrong from your own mistake catalog, add what it cost, and basis shows what your month would have been without it.</p>
      </div>

      <div class="flex flex-col gap-3">
        <div class="reveal hairline rounded-2xl bg-s1 px-5 py-2" role="img" aria-label="Strategies ranked by this month’s P&L, each with its win rate and trade count">
          <div class="flex justify-between pt-3 pb-2">
            <span class="text-[13px] font-medium tracking-[.04em] text-f3 uppercase">By P&amp;L · October</span>
            <span class="text-[13px] text-f3">Win rate · trades</span>
          </div>
          <div v-for="s in strats" :key="s.n" class="flex flex-col gap-2.5 border-t-[.5px] border-hair py-3">
            <div class="flex items-center gap-3">
              <span class="num flex size-9 items-center justify-center rounded-[9px] text-[13px] font-bold" :style="{ color: s.col, background: s.bg }">{{ s.initials }}</span>
              <div class="flex min-w-0 flex-1 flex-col gap-[3px]">
                <span class="text-[16px] font-semibold">{{ s.n }}</span>
                <span class="text-[13px] text-f2">{{ s.m }}</span>
              </div>
              <div class="flex flex-col items-end gap-[3px]">
                <span class="num text-[15px] font-semibold" :class="s.cls">{{ s.pnl }}</span>
                <span class="num text-[12px] text-f2">{{ s.wr }}</span>
              </div>
            </div>
            <div class="h-1 rounded-[2px] bg-s2">
              <div class="growv h-1 rounded-[2px]" :style="{ width: s.w, background: s.col }" />
            </div>
          </div>
        </div>

        <div class="reveal hairline rounded-2xl bg-s1 px-5 py-2" role="img" aria-label="Mistakes this month with severity, count and estimated cost">
          <div class="flex justify-between pt-3 pb-2">
            <span class="text-[13px] font-medium tracking-[.04em] text-f3 uppercase">Mistakes · October</span>
            <span class="text-[13px] text-f3">Est. cost</span>
          </div>
          <div v-for="m in mist" :key="m.n" class="flex min-h-12 items-center gap-2.5 border-t-[.5px] border-hair">
            <span class="flex-1 text-[15px] font-medium">{{ m.n }}</span>
            <span class="inline-flex h-[22px] items-center rounded-md px-2 text-[12px] font-semibold" :class="m.sevCls">{{ m.s }}</span>
            <span class="num w-7 text-right text-[13px] text-f2">{{ m.k }}</span>
            <span class="num w-24 text-right text-[15px] font-semibold text-dn">{{ m.c }}</span>
          </div>
          <div class="flex min-h-[52px] items-center justify-between border-t-[.5px] border-hair text-[15px]">
            <span class="text-f2">Net without these</span>
            <span class="num font-semibold text-up">▲ +1,614.66</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
