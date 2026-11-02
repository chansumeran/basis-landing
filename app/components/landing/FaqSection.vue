<script setup lang="ts">
import { faq } from '~/utils/landing'

const price = usePrice()
</script>

<template>
  <section id="faq" class="wrap flex flex-col gap-8 pt-30 max-sm:pt-18">
    <div class="reveal flex flex-col gap-4">
      <span class="eyebrow">FAQ</span>
      <h2 class="h2">Questions traders ask</h2>
    </div>
    <div class="border-b border-hair">
      <details v-for="q in faq" :key="q.q" class="reveal group border-t border-hair">
        <summary class="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 text-[18px] font-semibold max-sm:text-[16px] [&::-webkit-details-marker]:hidden">
          {{ q.q }}
          <LandingIcon d="M12 5v14M5 12h14" :size="22" class="text-f2 transition-transform duration-250 group-open:rotate-45" />
        </summary>
        <p class="pane-in mb-6 max-w-[760px] text-[16px] leading-[25px] text-f2">{{ q.a.replace('{price}', price) }}</p>
      </details>
    </div>
  </section>
</template>
