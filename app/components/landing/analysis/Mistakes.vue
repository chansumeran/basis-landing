<script setup lang="ts">
import { cal, mist } from '~/utils/landing'
</script>

<template>
  <div class="hairline grid grid-cols-2 gap-3 rounded-2xl bg-s1 p-4">
    <div class="flex flex-col gap-1.5"><span class="text-[14px] text-f2">Net</span><span class="num text-[20px] font-semibold text-up">{{ cal.net }}</span></div>
    <div class="flex flex-col gap-1.5"><span class="text-[14px] text-f2">Without mistakes</span><span class="num text-[20px] font-semibold text-up">▲ +1,614.66</span></div>
    <span class="col-span-full text-[14px] text-f2">Mistakes cost you <span class="num text-dn">▼ −606.85</span> this month.</span>
  </div>
  <div class="hairline rounded-2xl bg-s1 px-4">
    <div v-for="m in mist" :key="m.n" class="flex min-h-[52px] items-center gap-2.5 border-b-[.5px] border-hair">
      <span class="flex-1 text-[15px] font-medium">{{ m.n }}</span>
      <span class="inline-flex h-[22px] items-center rounded-md px-2 text-[12px] font-semibold" :class="m.sevCls">{{ m.s }}</span>
      <span class="num w-[26px] text-right text-[13px] text-f2">{{ m.k }}</span>
      <span class="num w-[84px] text-right text-[14px] font-semibold text-dn">{{ m.c }}</span>
    </div>
  </div>
</template>
