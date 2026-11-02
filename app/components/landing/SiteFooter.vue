<script setup lang="ts">
import { links } from '~/utils/landing'
</script>

<template>
  <footer class="shadow-[0_-.5px_0_var(--color-hair)]">
    <div class="wrap flex flex-wrap items-center justify-between gap-6 pt-8 pb-6">
      <div class="flex flex-wrap items-center gap-2">
        <LandingBasisMark :size="30" />
        <span class="font-display text-[20px] font-extrabold tracking-[-.05em]">basis</span>
        <span class="pl-2 text-[14px] text-f3">A private trading journal · Encrypted · On your device · No account</span>
      </div>
      <nav class="flex items-center gap-6" aria-label="Footer">
        <a :href="links.privacyPolicy" class="text-[15px] font-medium text-f2 transition-colors duration-150 hover:text-fg">Privacy policy</a>
        <a :href="links.support" class="text-[15px] font-medium text-f2 transition-colors duration-150 hover:text-fg">Support</a>
        <span class="text-[14px] text-f3">© 2026 basis</span>
      </nav>
    </div>
    <div class="wrap pb-10">
      <p class="max-w-[820px] text-[12px] leading-[18px] text-f3">basis is a journal, not financial advice, and it never places trades. MEXC and OKX are trademarks of their owners; basis is not affiliated with either exchange.</p>
    </div>
  </footer>
</template>
