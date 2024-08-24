<script>
	// @ts-nocheck

	import { page } from "$app/stores";
	import { Button } from "$lib/components/ui/button";
</script>

<div class="flex h-full items-center justify-center">
	<div class="m-4 w-fit rounded-lg border-[1px] border-[#343438] bg-background/90 p-4">
		<div class="flex flex-col items-center">
			<!-- svelte-ignore a11y-missing-attribute -->
			<!-- Todo: replace centcom person with banner whenever I find one-->
			<img class="h-16 w-16" src={$page.status == 404 ? "/spacecat_dead.png" : "/centcom.png"} />
			<h1 class="mb-4 mt-8">{$page.status} {$page.error.message}</h1>
			<p class="mb-6">
				{$page.status == 404
					? "You shouldn't make a habit of getting lost in space."
					: "Something went wrong, blame Centcom."}
			</p>
			<Button variant="spacebutton" href="/">
				<span>Return Home</span>
			</Button>
		</div>
	</div>
</div>
