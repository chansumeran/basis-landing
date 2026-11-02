<script setup lang="ts">
const { themeLabel, toggleTheme } = useLandingTheme()

// The new theme spreads out from the toggle in a growing circle, and the icon spins in. Browsers
// without view transitions, and people who ask for reduced motion, get an instant switch.
const spins = ref(0)
async function onToggle(e: MouseEvent) {
  spins.value++
  if (!document.startViewTransition || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    toggleTheme()
    return
  }
  const r = (e.currentTarget as HTMLElement).getBoundingClientRect()
  const x = r.left + r.width / 2
  const y = r.top + r.height / 2
  const radius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))
  const transition = document.startViewTransition(async () => {
    toggleTheme()
    await nextTick()
  })
  await transition.ready
  document.documentElement.animate(
    { clipPath: [`circle(0 at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
    { duration: 550, easing: 'cubic-bezier(.4, 0, .2, 1)', pseudoElement: '::view-transition-new(root)' },
  )
}

// Absolute (/#…) so they also work from the other pages; on the home page they smooth-scroll and
// leave the URL alone (see onAnchorClick in pages/index.vue).
const links = [
  { href: '/#how', label: 'How it works', hide: 'max-md:hidden' },
  { href: '/#features', label: 'Features', hide: 'max-md:hidden' },
  { href: '/#privacy', label: 'Privacy', hide: 'max-sm:hidden' },
  { href: '/#faq', label: 'FAQ', hide: 'max-md:hidden' },
]
</script>

<template>
  <header class="sticky top-0 z-10 bg-bg/86 shadow-[0_.5px_0_var(--color-hair)] backdrop-blur-[16px]">
    <div class="wrap flex h-16 items-center justify-between gap-4">
      <a href="/#top" aria-label="basis home" class="flex items-center gap-2">
        <LandingBasisMark :size="36" />
        <span class="font-display text-[24px] font-extrabold tracking-[-.05em] text-fg">basis</span>
      </a>
      <nav class="flex items-center gap-7 max-sm:gap-3" aria-label="Main">
        <a v-for="l in links" :key="l.href" :href="l.href" class="text-[15px] font-medium text-f2 transition-colors duration-150 hover:text-fg" :class="l.hide">{{ l.label }}</a>
        <button type="button" class="inline-flex size-10 flex-none cursor-pointer items-center justify-center rounded-full bg-s2 text-fg transition-colors duration-150 hover:bg-s3" :aria-label="themeLabel" @click="onToggle">
          <span :key="spins" class="block" :class="{ 'theme-spin': spins }">
            <LandingIcon d="M12 16a4 4 0 1 0 0-8a4 4 0 1 0 0 8zM12 2.5v2M12 19.5v2M4.6 4.6l1.4 1.4M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4L6 18M18 6l1.4-1.4" :size="19" class="light:hidden" />
            <LandingIcon d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10z" :size="19" class="hidden light:block" />
          </span>
        </button>
        <a href="/#download" class="btn2 h-10 px-4 text-[15px]">Get the app</a>
      </nav>
    </div>
  </header>
</template>
