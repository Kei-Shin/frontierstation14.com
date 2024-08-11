<script>
// @ts-nocheck

    import { page } from '$app/stores';
    import { Button } from "$lib/components/ui/button";
</script>

<div class="flex h-full justify-center items-center">
    <div class="w-fit m-4 rounded-lg border-[1px] border-[#343438] bg-background/90 p-4">
        <div class="flex flex-col items-center">
            <!-- svelte-ignore a11y-missing-attribute -->
            <!-- Todo: replace centcom person with banner whenever I find one-->
            <img class="w-16 h-16" src={$page.status == 404  ? "/spacecat_dead.png" : "/centcom.png"}>
            <h1 class="mt-8 mb-4">{$page.status} {$page.error.message}</h1>
            <p class="mb-6">{$page.status == 404  ? "You shouldn't make a habit of getting lost in space." : "Something went wrong, blame Centcom."}</p>
            <Button variant="spacebutton" href="/">
                <span>Return Home</span>
            </Button>
        </div>
    </div>
</div>
