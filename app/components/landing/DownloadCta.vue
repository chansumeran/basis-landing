<script setup lang="ts">
import { exchangesAnd, links } from '~/utils/landing'
</script>

<template>
  <section id="download" class="wrap pt-30 pb-24 max-sm:pt-18">
    <div class="reveal hairline flex flex-col items-center gap-6 rounded-2xl bg-s1 px-8 py-[72px] text-center max-sm:px-4 max-sm:py-8">
      <LandingBasisMark :size="104" wave />
      <h2 class="h2 max-w-[720px]">Journal the trade while you still remember it.</h2>
      <p class="lead max-w-[560px]">Connect a read-only key, and your next closed position is waiting for a note.</p>
      <a :href="links.appStore" class="btn">
        <LandingIcon d="M12 4v11M7 10.5l5 5 5-5M5 19.5h14" :size="20" :stroke="2" />
        Get basis for iOS
      </a>
      <span class="text-[14px] text-f3">iOS 17 or later · Works with {{ exchangesAnd }}</span>
    </div>
  </section>
</template>
