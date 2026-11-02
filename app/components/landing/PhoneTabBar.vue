<script setup lang="ts">
import { tabs } from '~/utils/landing'

// The app's bottom tab bar. `active` is the index of the highlighted tab.
const props = defineProps<{ active: number }>()
const items = computed(() => tabs(props.active))
</script>

<template>
  <div class="absolute inset-x-0 bottom-0 z-[2] flex h-[84px] bg-bg/94 px-0.5 pt-[7px] shadow-[0_-.5px_0_var(--color-hair)]">
    <span v-for="t in items" :key="t.l" class="flex h-[49px] flex-1 flex-col items-center gap-0.5 text-[10px] font-medium" :class="t.cls">
      <LandingIcon :d="t.d" :size="26" />{{ t.l }}
    </span>
  </div>
</template>
