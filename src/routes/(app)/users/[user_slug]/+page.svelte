<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";
  import TimelineMinor from "$lib/components/Timeline/Minor.svelte";
  import TimelineMajor from "$lib/components/Timeline/Major.svelte";
  import { MeatballsIcon, RedirectIcon } from "$lib/icons";
  import { TimelineSection as TS } from "$lib/types";
  import { delay } from "$lib/utilities.js";
  import { fly } from "svelte/transition";
  import { onMount } from "svelte";

  export let data;

  let fullname = data.profile.fn;
  $: {
    if (data.profile.mn) fullname += " " + data.profile.mn;
    if (data.profile.ln) fullname += " " + data.profile.ln;
  }

  let following = data.profile.following;
  let followLoading = false;
  async function handleFollow() {
    followLoading = true;
    await delay(500);
    following = true;
    followLoading = false;
  }

  async function handleUnfollow() {
    followLoading = true;
    await delay(500);
    following = false;
    followLoading = false;
  }

  let ready = false;
  onMount(() => ready = true);

</script>

<svelte:head>
  <title>{fullname} | Duggup</title> 
</svelte:head>

<!-- Consumable Content -->
<main class="flex h-full w-full py-7">
  <section class="flex flex-col flex-1 items-center px-4 lg:px-12">

    <!-- About -->
    <article class="flex flex-row w-full mt-5 lg:pl-32 gap-10 lg:gap-14">
      <!-- Avatar -->
      <figure class="w-[7.5rem]">
        <Avatar.Root class="h-[7.5rem] w-[7.5rem] border-[5px] border-accent">
          <Avatar.Image src={data.profile.dp} alt="user-dp" />
          <Avatar.Fallback class="text-4xl font-bold bg-accent text-muted-foreground">{fullname[0]}</Avatar.Fallback>
        </Avatar.Root>

        <span class="text-2xl leading-7 text-center inline-block font-bold mt-2 text-accent-foreground">
          {fullname}
        </span>
      </figure>

      <!-- Bio -->
      <div class="flex flex-col flex-1 gap-5">
        <div class="flex flex-col lg:flex-row mt-5">
          <div class="flex flex-col gap-[1.25rem] max-w-[28rem] lg:max-w-[36.5rem] lg:mr-[6.375rem] text-sm leading-6 justify-between">
            <span class="pr-2 pb-2.5">
              {data.profile.bio}
            </span>

            {#if following}
              <Button class="w-max" on:click={handleUnfollow} variant="default" disabled={followLoading} aria-label={"follow-user"}>
                Follow
              </Button>
            {:else}
              <Button class="w-max" on:click={handleFollow} variant="destructive" disabled={followLoading} aria-label={"unfollow-user"}>
                Followed
              </Button>
            {/if}
          </div>

          <div class="hidden lg:flex flex-col gap-[1.25rem] w-[8.75rem] lg:items-end">
            <div class="flex flex-col items-center lg:items-end">
              <img src={data.profile.work?.dp} alt="currenty-working-logo" class="w-9 h-9 mb-2" />

              <span class="font-bold text-accent-foreground">{data.profile.work?.nm}</span>
              <span class="text-end text-muted-foreground text-xs text-nowrap">{data.profile.work?.title}</span>
            </div>

            <div class="gap-1 flex">
              <Button variant="link" size="sm" href={data.profile.website} target="_blank" aria-label="user-website">
                <span class="mr-1">My website</span>
                <RedirectIcon />
              </Button>

              <Button variant="ghost" class="h-7 w-7 px-0" aria-label="more-user-links">
                <MeatballsIcon />
              </Button>
            </div>

          </div>
        </div>
      </div>
    </article>

    <!-- Timeline -->
    {#if ready}
    <article class="flex flex-col w-full my-5" in:fly={{ y: 150, duration: 400 }}>
      {#each data.timeline as section, i}
        {#if section.type === TS.Major}
          <TimelineMajor data={section.work} />
        {:else}
          <TimelineMinor data={section.posts} />
        {/if}
      {/each}
    </article>
    {/if}
  </section>
</main>
