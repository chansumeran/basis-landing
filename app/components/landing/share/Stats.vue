<script setup lang="ts">
// Entry, exit, holding time and R. Two or four columns, left-aligned or centred.
withDefaults(defineProps<{ cols?: 2 | 4, center?: boolean }>(), { cols: 4 })

const stats = [
  { l: 'Entry', v: '152.84' },
  { l: 'Exit', v: '155.73' },
  { l: 'Held', v: '3h 42m' },
  { l: 'Result', v: '+1.5R', cls: 'text-up' },
]
</script>

<template>
  <div class="grid gap-x-2 gap-y-3.5" :class="cols === 2 ? 'grid-cols-2' : 'grid-cols-4'">
    <div v-for="s in stats" :key="s.l" class="flex flex-col gap-[5px]" :class="center ? 'items-center' : 'items-start'">
      <span class="font-mono text-[9px] font-medium tracking-[.05em] text-f3 uppercase">{{ s.l }}</span>
      <span class="font-mono text-[13px] font-semibold" :class="s.cls">{{ s.v }}</span>
    </div>
  </div>
</template>
