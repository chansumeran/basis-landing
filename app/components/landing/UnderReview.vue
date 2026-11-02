<script setup lang="ts">
// Holding page for links that aren't live yet (the App Store listing, the privacy policy, support).
const props = defineProps<{ eyebrow: string, title: string, body: string }>()

const { themeClass } = useLandingTheme()
useSystemColorScheme()

useHead({ title: `${props.eyebrow} — basis` })
// Placeholders shouldn't show up in search results.
useSeoMeta({ robots: 'noindex' })
</script>

<template>
  <div class="lp flex min-h-dvh w-full flex-col overflow-x-clip bg-bg font-sans leading-[normal] text-fg antialiased" :class="themeClass">
    <LandingSiteHeader />

    <main class="wrap flex w-full flex-1 items-center justify-center py-24 max-sm:py-16">
      <div class="hairline flex w-full max-w-[640px] flex-col items-center gap-6 rounded-2xl bg-s1 px-8 py-16 text-center max-sm:px-5 max-sm:py-12">
        <LandingBasisMark :size="88" wave />
        <span class="in1 inline-flex h-7 items-center gap-2 rounded-full bg-accbg px-3 text-[13px] font-semibold text-acc">
          <span class="dotp size-2 rounded-full bg-acc" />Under review
        </span>
        <span class="eyebrow in2">{{ eyebrow }}</span>
        <h1 class="h2 in2 max-w-[520px]">{{ title }}</h1>
        <p class="lead in3 max-w-[480px]">{{ body }}</p>
        <div class="in4 flex flex-wrap justify-center gap-3 pt-2 max-sm:w-full max-sm:flex-col">
          <a href="/" class="btn max-sm:w-full">
            <LandingIcon d="M15 5l-7 7 7 7" :size="18" :stroke="2.2" />
            Back to basis
          </a>
          <a href="/#faq" class="btn2 max-sm:w-full">Read the FAQ</a>
        </div>
      </div>
    </main>

    <LandingSiteFooter />
  </div>
</template>
