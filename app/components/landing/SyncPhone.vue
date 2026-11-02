<script setup lang="ts">
import { sync } from '~/utils/landing'
</script>

<template>
  <!-- The sync screen: the mark ripples while each account's steps tick off, then it settles on Up to date.
       phA/phB cross-fade the syncing and finished states on the same 12s loop as the rows. -->
  <LandingPhoneFrame role="img" aria-label="The sync screen: the basis mark ripples while each account’s steps are listed as they finish, then Up to date">
    <div class="flex flex-col items-center gap-3.5 pt-7 pb-6">
      <LandingBasisMark :size="84" wave />
      <div class="relative h-14 w-full text-center">
        <div class="phA absolute inset-0 flex flex-col items-center gap-1.5 opacity-0">
          <span class="text-[24px] font-bold">Syncing</span>
          <span class="text-[15px] text-f2">Pulling your latest trades</span>
        </div>
        <div class="phB absolute inset-0 flex flex-col items-center gap-1.5">
          <span class="text-[24px] font-bold">Up to date</span>
          <span class="text-[15px] text-f2">Finished at 14:32</span>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-5 px-5 py-1">
      <div v-for="g in sync" :key="g.t" class="flex flex-col gap-2">
        <span class="num pl-1 text-[11px] font-medium tracking-[.1em] text-f3" :class="g.cls">{{ g.t }}</span>
        <div class="hairline rounded-2xl bg-s1">
          <div v-for="r in g.rows" :key="r.t" class="flex items-center gap-3.5 px-4 py-3" :class="r.cls">
            <span class="relative flex size-6 flex-none items-center justify-center">
              <span class="absolute flex opacity-0" :class="r.sp">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <g>
                    <circle cx="12" cy="12" r="9" class="fill-none stroke-s3" stroke-width="2.5" />
                    <path d="M12 3a9 9 0 0 1 9 9" class="fill-none stroke-fg" stroke-width="2.5" stroke-linecap="round" />
                    <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.8s" repeatCount="indefinite" />
                  </g>
                </svg>
              </span>
              <span class="absolute flex" :class="r.ck">
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" class="fill-up" />
                  <path d="M7.5 12.5l3 3 6-6.5" class="fill-none stroke-bg" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </span>
            <div class="flex flex-1 flex-col gap-[3px]">
              <span class="text-[16px] font-semibold">{{ r.t }}</span>
              <span class="text-[14px] text-f2">{{ r.d }}</span>
            </div>
            <LandingIcon d="M9 5l7 7-7 7" :size="13" :stroke="2.6" class="text-f3" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-x-5 bottom-[34px] h-[50px] text-[17px] font-semibold">
      <span class="phA absolute inset-0 flex items-center justify-center rounded-[14px] bg-s2 text-f3 opacity-0">Syncing…</span>
      <span class="phB absolute inset-0 flex items-center justify-center rounded-[14px] bg-acc text-onacc">Back to Journal</span>
    </div>
  </LandingPhoneFrame>
</template>
