<template>
  <!-- An iPhone-sized screen (390 × 844) inside a bezel. Content starts below the status bar. -->
  <div class="relative m-[11px] h-[844px] w-[390px] flex-none overflow-hidden rounded-[52px] bg-bg text-[15px] text-fg shadow-[0_0_0_10px_var(--color-bez),0_0_0_11px_rgba(0,0,0,.6),0_40px_80px_-30px_rgba(0,0,0,.9)]">
    <div class="absolute inset-0 flex flex-col pt-[54px]">
      <slot />
    </div>
  </div>
</template>
