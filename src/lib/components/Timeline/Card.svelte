<script lang="ts">
  import type { Post } from "$lib/types";
  export let data: Post;
</script>

<article class="rounded-xl w-[21.5rem] overflow-hidden flex flex-col bg-card border border-card-border cursor-pointer hover:-translate-y-0.5 transition-transform">
  <img src={data.img} alt="user-post" class="w-full lg:h-[8.5rem] object-cover" />

  <div class="p-6">
    <span class="text-sm leading-5 line-clamp-2 text-ellipsis">
      {data.text}
    </span>
  </div>
</article>