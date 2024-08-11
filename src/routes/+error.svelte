<script>
    import { Button } from "$lib/components/ui/button";
</script>

<div class="flex h-full justify-center items-center">
    <div class="w-fit m-4 rounded-lg border-[1px] border-[#343438] bg-background/90 p-4">
        <div class="flex flex-col items-center">
            <img class="w-16 h-16" src="/spacecat_dead.png" alt="Spacesuit cat with a broken helmet">
            <h1 class="mt-8 mb-4">404 Error!</h1>
            <p class="mb-6">You shouldn't make a habit of getting lost in space.</p>
            <Button variant="spacebutton" href="/">
                <span>Return Home</span>
            </Button>
        </div>
    </div>
</div>
