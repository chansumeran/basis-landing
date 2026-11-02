<script setup lang="ts">
import { strats } from '~/utils/landing'
</script>

<template>
  <div class="hairline flex flex-col gap-3 rounded-2xl bg-s1 p-4">
    <span class="text-[14px] text-f2">Breakout Retest · win rate</span>
    <div class="flex items-baseline gap-3.5"><span class="num text-[34px] font-medium">60%</span><span class="text-[15px] text-f2">all rules followed</span></div>
    <div class="flex items-baseline gap-3.5"><span class="num text-[22px] font-medium text-f2">33%</span><span class="text-[15px] text-f2">any rule broken</span></div>
  </div>
  <div class="hairline flex flex-col gap-1.5 rounded-2xl bg-s1 p-4">
    <span class="text-[14px] text-f2">Costliest broken rule</span>
    <span class="text-[17px] font-semibold">Stop below structure</span>
    <span class="text-[14px] text-f2">Broken on 3 trades · <span class="num text-dn">▼ −184.20</span></span>
  </div>
  <div class="hairline rounded-2xl bg-s1 px-4">
    <div v-for="s in strats" :key="s.n" class="flex min-h-14 items-center gap-3 border-b-[.5px] border-hair">
      <span class="num flex size-8 items-center justify-center rounded-lg text-[12px] font-bold" :style="{ color: s.col, background: s.bg }">{{ s.initials }}</span>
      <span class="flex-1 text-[15px] font-semibold">{{ s.n }}</span>
      <div class="flex flex-col items-end gap-0.5">
        <span class="num text-[14px] font-semibold" :class="s.cls">{{ s.pnl }}</span>
        <span class="num text-[12px] text-f2">{{ s.wr }}</span>
      </div>
    </div>
  </div>
</template>
