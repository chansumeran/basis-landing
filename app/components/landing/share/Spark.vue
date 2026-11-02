<script setup lang="ts">
import { sc } from '~/utils/landing'
</script>

<template>
  <!-- The trade's running P&L, stretched to fill its box with hairline strokes. -->
  <svg viewBox="0 0 300 100" preserveAspectRatio="none" class="block size-full overflow-visible" aria-hidden="true">
    <path :d="sc.zero" class="fill-none stroke-f3 [stroke-dasharray:3_3] [stroke-opacity:.7] [vector-effect:non-scaling-stroke]" stroke-width="1" />
    <path :d="sc.area" class="fill-up/14" />
    <path :d="sc.line" class="fill-none stroke-up [vector-effect:non-scaling-stroke]" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" />
  </svg>
</template>
