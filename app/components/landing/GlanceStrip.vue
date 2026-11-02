<script setup lang="ts">
import { strip } from '~/utils/landing'
</script>

<template>
  <section class="wrap reveal pb-6 max-sm:pt-18" aria-label="At a glance">
    <!-- Four across, two by two on tablets, stacked on phones; dividers follow the layout. -->
    <div class="hairline grid grid-cols-4 rounded-2xl bg-s1 max-md:grid-cols-2 max-sm:grid-cols-1">
      <div v-for="s in strip" :key="s.t" class="flex items-center gap-3 border-l border-hair p-6 first:border-l-0 max-md:nth-3:border-l-0 max-sm:border-t max-sm:border-l-0 max-sm:first:border-t-0">
        <LandingIcon :d="s.d" class="text-f2" />
        <div class="flex flex-col gap-0.5">
          <span class="text-[15px] font-semibold">{{ s.t }}</span>
          <span class="text-[13px] text-f3">{{ s.s }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
