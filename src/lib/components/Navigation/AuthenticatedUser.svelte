<script lang="ts">
  import * as Avatar from "$lib/components/ui/avatar";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
  import { Button } from "$lib/components/ui/button";
  import { ChevronDownIcon } from "$lib/icons";
  import type { AuthUser } from "$lib/types";

  export let user: AuthUser;
</script>

<DropdownMenu.Root>
  <DropdownMenu.Trigger asChild let:builder>
    <Button builders={[ builder ]} variant="ghost" class="px-4 py-[2px]" size="lg" aria-label="user-options-menu">
      <Avatar.Root class="h-12 w-12 lg:mr-3 border">
        <Avatar.Image src={user.dp} alt="user-dp" />
        <Avatar.Fallback class="text-xl font-bold bg-accent text-muted-foreground">
          {user?.fn[0]}
        </Avatar.Fallback>
      </Avatar.Root>

      <div class="items-center hidden lg:flex">
        <span class="mr-3 w-32 font-medium text-xl leading-6">
          {user.fn} {user.ln}
        </span>

        <ChevronDownIcon />
      </div>

    </Button>
  </DropdownMenu.Trigger>

  <!--  Items here
    <DropdownMenu.Content class="w-52 rounded-lg">
    </DropdownMenu.Content>
  -->

</DropdownMenu.Root>
