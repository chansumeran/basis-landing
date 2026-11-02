<script setup lang="ts">
import { rdist } from '~/utils/landing'
</script>

<template>
  <div class="hairline flex flex-col gap-2.5 rounded-2xl bg-s1 p-4">
    <span class="text-[14px] text-f2">Captured on winners</span>
    <span class="flex items-baseline gap-2.5"><span class="num text-[34px] font-medium">35%</span><span class="text-[15px] text-f2">of the available move</span></span>
    <div class="h-1.5 rounded-[3px] bg-s2">
      <div class="grow-in h-1.5 w-[35%] rounded-[3px] bg-up" style="animation-delay: 0s" />
    </div>
    <span class="text-[14px] text-f2">Early exits cost <span class="num text-dn">▼ −212.40</span> this month.</span>
  </div>
  <div class="grid grid-cols-2 gap-2.5">
    <div class="hairline flex flex-col gap-1.5 rounded-2xl bg-s1 p-3.5"><span class="text-[14px] text-f2">Avg MAE</span><span class="num text-[22px] font-bold text-dn">−0.52R</span><span class="text-[13px] text-f3">Worst open loss</span></div>
    <div class="hairline flex flex-col gap-1.5 rounded-2xl bg-s1 p-3.5"><span class="text-[14px] text-f2">Avg MFE</span><span class="num text-[22px] font-bold text-up">+1.84R</span><span class="text-[13px] text-f3">Best open profit</span></div>
  </div>
  <div class="hairline flex flex-col gap-3 rounded-2xl bg-s1 p-4">
    <span class="text-[14px] text-f2">R distribution</span>
    <div class="flex h-[84px] items-end gap-2">
      <div v-for="b in rdist" :key="b.l" class="flex flex-1 flex-col items-center gap-1">
        <span class="num text-[11px] text-f2">{{ b.n }}</span>
        <span class="rbar w-full rounded-[4px]" :class="b.cls" :style="{ height: b.h }" />
      </div>
    </div>
    <div class="flex gap-2">
      <span v-for="b in rdist" :key="b.l" class="num flex-1 text-center text-[10.5px] text-f3">{{ b.l }}</span>
    </div>
  </div>
</template>
