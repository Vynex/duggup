<!-- Nav. Header Goes Here -->

<script>
  import LoadingUser from "$lib/components/Navigation/LoadingUser.svelte";
  import AuthenticatedUser from "$lib/components/Navigation/AuthenticatedUser.svelte";

  import { Button } from "$lib/components/ui/button";
  import { PlusIcon, HomeIcon, StoryIcon, BookIcon, LogoIcon } from "$lib/icons";

  export let data;

  const links = [
    { nm: "Home",     route: "/",         icon: HomeIcon   },
    { nm: "Explore",  route: "/explore",  icon: StoryIcon  },
    { nm: "Learn",    route: "/learn",    icon: BookIcon   },
  ];
</script>

<header class="app-header relative flex justify-between items-center w-full py-[0.4rem] border-dotted">
  <a href="https://duggup.com/" target="_blank" aria-label="home-page">
    <LogoIcon class="h-7" />
  </a>

  <nav class="flex items-center gap-10">
    <div class="h-full hidden md:flex justify-end items-center flex-1">
      {#each links as link}
        <Button variant={"ghost"} aria-label="nav-{link.nm}">
          <svelte:component this={link.icon} />
          <span class="ml-2">{link.nm}</span>
        </Button>
      {/each}

      <Button class="ml-10" aria-label="new-post">
        <PlusIcon class="mr-3" />
        <span>Post</span>
      </Button>
    </div>

    {#await data.user}
      <LoadingUser />
    {:then user}
      <AuthenticatedUser {user} />
    {/await}
  </nav>
</header>

<slot />

<style>
  .app-header::after {
    position: absolute;
    content: " "; bottom: 0;
    width: 100%; height: 4px;

    background-image: url("/icons/dot.svg");
    background-size: 4px 3px;
    background-repeat: repeat-x;
  }
</style>