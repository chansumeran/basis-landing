<script setup lang="ts">
import { jweeks } from '~/utils/landing'
</script>

<template>
  <div class="grid grid-cols-2 gap-2.5">
    <div class="hairline flex flex-col gap-1.5 rounded-2xl bg-s1 p-3.5"><span class="text-[14px] text-f2">Journaled</span><span class="num text-[18px] font-bold text-up">▲ +1,120.40</span><span class="text-[13px] text-f3">18 trades · 67% win</span></div>
    <div class="hairline flex flex-col gap-1.5 rounded-2xl bg-s1 p-3.5"><span class="text-[14px] text-f2">Unjournaled</span><span class="num text-[18px] font-bold text-dn">▼ −112.59</span><span class="text-[13px] text-f3">5 trades · 40% win</span></div>
  </div>
  <div class="hairline rounded-2xl bg-s1 px-4 pt-1 pb-2">
    <div v-for="w in jweeks" :key="w.l" class="flex flex-col gap-1.5 border-b-[.5px] border-hair py-2.5">
      <div class="flex justify-between text-[14px]"><span class="font-medium">{{ w.l }}</span><span class="text-f2">{{ w.t }}</span></div>
      <div class="h-[5px] rounded-[3px] bg-s2"><div class="h-[5px] rounded-[3px] bg-acc" :style="{ width: w.w }" /></div>
    </div>
  </div>
  <span class="flex h-[50px] items-center justify-center rounded-[14px] bg-acc text-[17px] font-semibold text-onacc">Journal 5 trades</span>
</template>
