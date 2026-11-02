<script setup lang="ts">
const { themeClass } = useLandingTheme()
useSystemColorScheme()

const description = 'basis imports your MEXC and OKX trades with a read-only API key and keeps them encrypted on your phone. No account, no cloud.'
const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, '')
useSeoMeta({
  description,
  ogType: 'website',
  ogSiteName: 'basis',
  ogTitle: 'basis — private crypto trading journal for iOS',
  ogDescription: description,
  ogImage: `${siteUrl}/og.png`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'basis: Every trade, journaled. Nothing leaves your phone.',
  ogUrl: siteUrl || undefined,
  twitterCard: 'summary_large_image',
})
const root = useTemplateRef<HTMLElement>('root')

// Scroll parallax. The hero gets --p from 0 (top of the page) to 1 (scrolled ~760px), which the CSS
// uses to fade the copy, open the V and straighten the phones. [data-par] elements drift relative
// to the viewport centre by their factor.
function applyParallax() {
  const el = root.value
  if (!el) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const hero = el.querySelector<HTMLElement>('#top')
  if (hero) {
    const p = reduce ? 1 : Math.min(1, Math.max(0, -hero.getBoundingClientRect().top / 760))
    hero.style.setProperty('--p', p.toFixed(4))
  }
  const vh = window.innerHeight || 900
  for (const item of el.querySelectorAll<HTMLElement>('[data-par]')) {
    // No parallax on the share cards once they become a swipe carousel: each card would drift on its own.
    if (reduce || (item.closest('.shares') && window.innerWidth <= 1180)) {
      item.style.transform = ''
      continue
    }
    const r = (item.parentNode as HTMLElement).getBoundingClientRect()
    const offset = (r.top + r.height / 2 - vh / 2) * parseFloat(item.dataset.par!)
    item.style.transform = `translateY(${Math.max(-90, Math.min(90, offset)).toFixed(1)}px)`
  }
}

let ticking = false
function onScroll() {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    ticking = false
    applyParallax()
  })
}

// In-page links (#how, /#faq, ...) scroll to their section without writing the #… into the address
// bar. scrollIntoView follows the CSS: smooth unless reduced motion, and clear of the sticky header.
function onAnchorClick(e: MouseEvent) {
  if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return
  const link = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"], a[href^="/#"]')
  const section = link && document.getElementById(link.getAttribute('href')!.split('#')[1]!)
  if (!section) return
  e.preventDefault()
  section.scrollIntoView()
}

onMounted(() => {
  document.addEventListener('scroll', onScroll, { capture: true, passive: true })
  window.addEventListener('resize', onScroll, { passive: true })
  document.addEventListener('click', onAnchorClick)
  applyParallax()
  // Arriving from another page via /#faq, the browser has already jumped to the section; drop the hash.
  if (location.hash) history.replaceState(history.state, '', location.pathname + location.search)
})

onBeforeUnmount(() => {
  document.removeEventListener('scroll', onScroll, { capture: true })
  window.removeEventListener('resize', onScroll)
  document.removeEventListener('click', onAnchorClick)
})
</script>

<template>
  <div ref="root" class="lp w-full overflow-x-clip bg-bg font-sans leading-[normal] text-fg antialiased" :class="themeClass">
    <LandingSiteHeader />
    <LandingHeroSection />
    <LandingGlanceStrip />
    <LandingHowItWorks />
    <LandingCalendarFeature />
    <LandingAnalysisFeature />
    <LandingPlaybookFeature />
    <LandingShareCards />
    <LandingWidgetsFeature />
    <LandingMoreFeatures />
    <LandingPrivacySection />
    <LandingFaqSection />
    <LandingDownloadCta />
    <LandingSiteFooter />
  </div>
</template>
