<script lang="ts">
  import type { Experience } from "$lib/types";
  import { getMonthYear } from "$lib/utilities";

  export let data: Experience;
</script>

<div class="flex flex-col flex-1 items-end text-end">
  <img src={data.dp} alt="currenty-working-logo" class="w-12 h-12 mb-2" />

  <h3 class="text-sm lg:text-md font-bold leading-5">
    {data.nm}
  </h3>

  <div class="text-xs text-nowrap text-muted-foreground">
    <div class="hidden lg:block">{data.location}</div>
    <div class="hidden lg:block">Joined</div>
    <div>{getMonthYear(data.joined_ts)}</div>
  </div>
</div>
