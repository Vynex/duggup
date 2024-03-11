<!-- Major Timeline Section; eg. New Role -->

<script lang="ts">
  import Organization from "./Organization.svelte";
  import { ChevronDownIcon } from "$lib/icons";
  import type { Experience } from "$lib/types";

  export let data: Experience;
</script>

<div class="flex">
  <div class="w-[2.5rem] lg:w-[10.75rem] flex items-center justify-end lg:pr-5">
    <Organization {data} />
  </div>

  <div class="w-8 flex flex-col items-center justify-center relative">
    <ChevronDownIcon class="absolute w-full top-0 rotate-180 bg-background z-10" />

    <div class="flex-1 w-full timeline" />

    <div class="absolute w-7 h-7 bg-primary rounded-full">
      <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-background rounded-full" />
    </div>
  </div>

  <div class="flex-1 mx-2 p-6">
    <div class="w-full px-5 py-4 bg-card rounded-xl shadow max-w-[44.5rem]">
      <h2 class="text-xl leading-8 font-bold">{data.title}</h2>

      <div class="text-xs leading-4 text-muted-foreground">
        <span>{data.shift}</span>
        <span> · </span>
        <span>{data.medium}</span>
      </div>
    </div>
  </div>
</div>

<style>
  .timeline { position: relative }
  .timeline::after {
    content: " ";
    display: block;
    height: 100%; width: 100%;
    position: absolute;
    inset: 0;

    background-image: url(/icons/dot.svg);
    background-position: 50%;
    background-repeat: repeat-y;
  }
</style>