<script>
	import panzoom from "panzoom";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";
	import config from "$lib/config.js";

	/**
	 * @type {string | null | undefined}
	 */
	let selectedShip;

	/**
	 * @type {import("panzoom").PanZoom | null}
	 */
	let instance;

	/**
	 * @param {HTMLElement} element
	 */
	function initPanzoom(element) {
		instance = null;
		instance = panzoom(element, {
			maxZoom: 3.5,
			initialZoom: 1,
			transformOrigin: { x: 0.5, y: 0.5 }
		});
	}
</script>

<main class="flex h-screen w-screen flex-col overflow-hidden">
	<div
		class="absolute z-10 m-4 w-fit rounded-lg border-[1px] border-[#343438] bg-background/90 p-2"
	>
		<div class="flex h-full">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Button variant="spacebutton" class="mx-8">
						<i class="fa-solid fa-chevron-down mr-2 h-4 w-4"></i>
						<span>Select Ship</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="grid h-96 grid-cols-3 gap-x-8 overflow-auto">
					{#each config.shipyard as shipType}
						<div class="col-span-3">
							<DropdownMenu.Label class="overflow-scroll font-bold text-accent-foreground"
								>{shipType.category}</DropdownMenu.Label
							>
							<DropdownMenu.Separator />
						</div>
						{#each shipType.items as ship}
							<DropdownMenu.Item
								class="p-1"
								on:click={() => (selectedShip = ship.imgPath)}
								value={ship.imgPath}>{ship.name}</DropdownMenu.Item
							>
						{/each}
					{/each}
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>

	<div class="flex h-full w-full items-center justify-center">
		{#key selectedShip}
			<img class="" src={selectedShip} use:initPanzoom alt="" />
		{/key}
		{#if !selectedShip}
			<div class="z-10 m-4 rounded-lg border-[1px] border-[#343438] bg-background/90 p-2">
				<div class="flex flex-col items-center justify-center">
					<h2>Welcome to the Shipyard</h2>
					<p>To get started select a ship in the top left!</p>
					<ul class="mx-4 w-fit list-disc">
						<li>
							Pan using <span class="text-accent-foreground">Mouse1</span> or
							<span class="text-accent-foreground">Touch</span> Gestures
						</li>
						<li>
							Zoom using <span class="text-accent-foreground">Scroll Wheel</span> or
							<span class="text-accent-foreground">Pinch</span> Gestures
						</li>
						<li>
							Report broken ships to kei_shin on the <a href={config.links.discord}
								>Frontier discord!</a
							>
						</li>
					</ul>
				</div>
			</div>
		{/if}
	</div>
</main>
