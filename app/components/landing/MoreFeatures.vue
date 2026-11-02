<script setup lang="ts">
import { more } from '~/utils/landing'
</script>

<template>
  <section class="wrap pt-16 max-sm:pt-18" aria-label="Also in basis">
    <div class="grid grid-cols-4 gap-4 max-lg:grid-cols-2 max-sm:grid-cols-1">
      <div v-for="m in more" :key="m.t" class="reveal flex flex-col gap-2.5 border-t border-hair py-5">
        <LandingIcon :d="m.d" class="text-f2" />
        <span class="text-[17px] font-semibold">{{ m.t }}</span>
        <span class="text-[15px] leading-[22px] text-f2">{{ m.b }}</span>
      </div>
    </div>
  </section>
</template>
