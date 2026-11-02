<script setup lang="ts">
import { bd } from '~/utils/landing'
</script>

<template>
  <span class="px-1 text-[14px] text-f2">The group with the most trades in each</span>
  <div class="hairline rounded-2xl bg-s1 px-4">
    <div v-for="b in bd" :key="b.d" class="flex min-h-[54px] items-center gap-2.5 border-b-[.5px] border-hair">
      <div class="flex min-w-0 flex-1 flex-col gap-0.5">
        <span class="text-[12px] text-f2">{{ b.d }}</span>
        <span class="text-[15px] font-semibold">{{ b.g }}</span>
      </div>
      <div class="flex flex-col items-end gap-0.5">
        <span class="num text-[14px] font-semibold text-up">{{ b.n }}</span>
        <span class="text-[12px] text-f3">{{ b.t }}</span>
      </div>
      <LandingIcon d="M9 5l7 7-7 7" :size="13" :stroke="2.6" class="text-f3" />
    </div>
  </div>
</template>
