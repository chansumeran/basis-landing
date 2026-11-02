<script setup lang="ts">
import { links, onPhone, priv } from '~/utils/landing'

// Data-flow connector: a dashed arrow, sideways on desktop and pointing down once the flow stacks.
const conns = [
  { top: 'Trades, fills, funding', bottom: 'Read-only key · HTTPS · encrypted DNS' },
  { top: 'Totals and counts', bottom: 'No keys, sizes or journal text' },
]
const nowhere = ['basis servers', 'Sign-up accounts', 'Analytics', 'Cloud sync']
</script>

<template>
  <section id="privacy" class="wrap pt-30 max-sm:pt-18">
    <div class="grid grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center gap-16 max-md:grid-cols-1 max-md:gap-10">
      <div class="reveal flex flex-col gap-6">
        <LandingBasisMark :size="200" wave slow class="-ml-10 max-sm:size-40" />
        <span class="eyebrow">Privacy</span>
        <h2 class="h2">Your trades are nobody’s business.</h2>
        <p class="lead">No account to create, no server holding your history, no analytics watching you. basis talks to your exchanges, and looks their addresses up over encrypted DNS. That’s it.</p>
      </div>
      <div class="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
        <div v-for="p in priv" :key="p.t" class="reveal hairline flex flex-col gap-3 rounded-2xl bg-s1 p-6">
          <LandingIcon :d="p.d" :size="26" />
          <h3 class="text-[18px] font-bold">{{ p.t }}</h3>
          <p class="text-[15px] leading-[22px] text-f2">{{ p.b }}</p>
        </div>
      </div>
    </div>

    <div class="reveal hairline mt-12 flex flex-col gap-7 rounded-2xl bg-s1 p-8 max-sm:px-4">
      <div class="flex flex-wrap items-baseline justify-between gap-4">
        <h3 class="text-[22px] font-bold">Where your data goes</h3>
        <a :href="links.privacyPolicy" class="text-[15px] font-medium text-f2 underline">Read the privacy policy →</a>
      </div>

      <!-- Exchange → basis on your phone → widgets. Stacks vertically below md. -->
      <div class="grid grid-cols-[minmax(0,1fr)_170px_minmax(0,1.25fr)_170px_minmax(0,1fr)] items-center max-md:grid-cols-1" role="img" aria-label="Your exchange sends trades to basis on your phone over a read-only key. basis on your phone gives widgets a small summary. Nothing goes to basis servers, accounts, analytics or cloud sync.">
        <div class="flex flex-col gap-2 rounded-2xl bg-bg p-5 inset-ring inset-ring-hair">
          <LandingIcon d="M4 9.5L12 4l8 5.5M5.5 10v8M10 10v8M14 10v8M18.5 10v8M3.5 20h17" class="text-f2" />
          <span class="text-[17px] font-semibold">Your exchange</span>
          <span class="text-[14px] leading-5 text-f2">MEXC and OKX accounts you connect</span>
        </div>

        <template v-for="(c, i) in conns" :key="c.top">
          <div class="flex flex-col items-center gap-2 px-2.5 text-center max-md:px-0 max-md:py-2.5">
            <span class="text-[13px] leading-[18px] text-f2">{{ c.top }}</span>
            <svg viewBox="0 0 150 12" preserveAspectRatio="none" class="h-3 w-full max-md:hidden" aria-hidden="true">
              <path d="M2 6H142" class="fill-none stroke-f3 [stroke-dasharray:4_4] [vector-effect:non-scaling-stroke]" stroke-width="1.5" />
              <path d="M140 1l8 5-8 5" class="fill-none stroke-f3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <svg viewBox="0 0 12 44" class="hidden h-11 w-3 max-md:block" aria-hidden="true">
              <path d="M6 2V36" class="fill-none stroke-f3 [stroke-dasharray:4_4]" stroke-width="1.5" />
              <path d="M1 34l5 8 5-8" class="fill-none stroke-f3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="text-[12px] leading-[17px] text-f3">{{ c.bottom }}</span>
          </div>

          <div v-if="i === 0" class="flex flex-col gap-2 rounded-2xl bg-s1 p-6 inset-ring inset-ring-acc/45">
            <div class="flex items-center gap-2.5">
              <LandingBasisMark :size="34" class="-ml-2" />
              <span class="text-[18px] font-bold">basis on your phone</span>
            </div>
            <span v-for="o in onPhone" :key="o" class="flex items-center gap-2.5 text-[14px]">
              <LandingIcon d="M5 12.5l4.5 4.5L19 7.5" :size="16" :stroke="2.4" class="text-up" />{{ o }}
            </span>
          </div>
        </template>

        <div class="flex flex-col gap-2 rounded-2xl bg-bg p-5 inset-ring inset-ring-hair">
          <LandingIcon d="M4.5 4.5h6v6h-6zM13.5 4.5h6v6h-6zM4.5 13.5h6v6h-6zM13.5 13.5h6v6h-6z" class="text-f2" />
          <span class="text-[17px] font-semibold">Widgets</span>
          <span class="text-[14px] leading-5 text-f2">Home and Lock Screen, percentages by default</span>
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <span class="text-[13px] font-medium tracking-[.04em] text-f3 uppercase">Nothing goes here, because none of it exists</span>
        <div class="grid grid-cols-4 gap-3 max-md:grid-cols-2">
          <span v-for="n in nowhere" :key="n" class="flex h-[52px] items-center justify-center gap-2 rounded-xl text-[14px] text-f3 line-through decoration-f3 inset-ring inset-ring-hair">{{ n }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
