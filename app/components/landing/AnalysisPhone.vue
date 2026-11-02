<script setup lang="ts">
import { ANALYSIS_TABS, type AnalysisTab } from '~/utils/landing'

// The Analysis tab. The selected section is shared with the list beside the phone.
const tab = defineModel<AnalysisTab>({ required: true })

const panes = {
  Overview: resolveComponent('LandingAnalysisOverview'),
  Strategy: resolveComponent('LandingAnalysisStrategy'),
  Mistakes: resolveComponent('LandingAnalysisMistakes'),
  Execution: resolveComponent('LandingAnalysisExecution'),
  Breakdowns: resolveComponent('LandingAnalysisBreakdowns'),
  Journal: resolveComponent('LandingAnalysisJournal'),
}

// Keep the selected tab in view when a section is picked from the list beside the phone.
const tabRow = useTemplateRef<HTMLElement>('tabRow')
watch(tab, async () => {
  await nextTick()
  const row = tabRow.value
  const btn = row?.querySelector<HTMLElement>('[aria-selected="true"]')
  if (!row || !btn) return
  const left = btn.offsetLeft - row.offsetLeft - 16
  if (Math.abs(row.scrollLeft - left) > 2) row.scrollLeft = Math.max(0, left)
})
</script>

<template>
  <LandingPhoneFrame aria-label="Interactive Analysis screen">
    <div class="flex min-h-[52px] items-center justify-between pt-2 pr-2 pl-4">
      <span class="hairline inline-flex h-9 items-center gap-1.5 rounded-full bg-s1 px-3.5 text-[15px] font-semibold">
        This month <LandingIcon d="M6 9l6 6 6-6" :size="11" :stroke="3" />
      </span>
      <span class="flex text-acc">
        <span class="inline-flex size-11 items-center justify-center"><LandingIcon d="M12 3.5v11M8 7.5l4-4 4 4M7 11H5.5v9.5h13V11H17" :size="22" /></span>
        <span class="inline-flex size-11 items-center justify-center"><LandingIcon d="M4.5 7h15M7.5 12h9M10.5 17h3" :size="22" /></span>
      </span>
    </div>
    <div class="px-4 pt-1.5"><span class="text-[34px] leading-[41px] font-bold tracking-[.004em]">Analysis</span></div>

    <!-- Section chips; the row scrolls sideways and fades out at the right edge. -->
    <div ref="tabRow" class="flex flex-none gap-2 overflow-x-auto scroll-smooth px-4 pt-3.5 [mask-image:linear-gradient(to_right,#000_calc(100%-36px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" role="tablist" aria-label="Analysis sections">
      <button
        v-for="t in ANALYSIS_TABS"
        :key="t"
        type="button"
        role="tab"
        :aria-selected="t === tab"
        class="inline-flex h-[38px] flex-none cursor-pointer items-center rounded-full bg-s1 px-4 text-[15px] font-semibold text-f2 transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-acc aria-selected:bg-fg aria-selected:text-bg"
        @click="tab = t"
      >
        {{ t }}
      </button>
    </div>

    <div class="flex px-4 pt-3.5"><LandingPhoneSegment /></div>

    <div class="px-4 pt-3.5">
      <div :key="tab" class="pane-in flex flex-col gap-2.5">
        <component :is="panes[tab]" />
      </div>
    </div>

    <LandingPhoneTabBar :active="2" />
  </LandingPhoneFrame>
</template>
