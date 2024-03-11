<!-- Major Timeline Section; eg. Posts in Month -->

<script lang="ts">
  import Card from "$lib/components/Timeline/Card.svelte";
  import type { Post } from "$lib/types";
  import { getMonthYear } from "$lib/utilities";

  export let data: Array<Post>;
</script>

<div class="flex">
  <div class="w-[2.5rem] lg:w-[10.75rem] flex items-center justify-center">
    <span class="w-full pr-5 text-xs leading-4 text-muted-foreground text-right">
      {getMonthYear(data[0].created_ts)}
    </span>
  </div>

  <div class="w-8 flex flex-col items-center justify-center">
    <div class="flex-1 w-full timeline" />

    <div class="absolute w-4 h-4 bg-primary rounded-full">
      <div class="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-card rounded-full" />
    </div>
  </div>

  <div class="flex-1 mx-2">
    <div class="p-6 flex gap-9 flex-col lg:flex-row">
      {#each data as post}
        <Card data={post} />
      {/each}
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