<script>
	// @ts-nocheck
	// If this file gets much more bigger then I'll redo the file structure and then do type defs
	import panzoom from "panzoom";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { Button } from "$lib/components/ui/button";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";
	import config from "$lib/config.js";
	import { goto, replaceState } from "$app/navigation";

	let selectedShip = {
		id: '',
		name: '',
		prefix: '',
		description: '',
		price: 0,
		category: ''
	};

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
	/** @type {import('./$types').PageData} */
	export let data;

	let shipList = [];
	let inputShip = "";
	let categorizedShips = {};

	(async () => {
		try {
			shipList = await data.post.shipList;

			const mapping = {
				Shipyard: "Civilian Vessels",
				Expedition: "Expedition Vessels",
				Scrap: "Scrapyard Vessels",
				Sr: "Frontier Outpost Vessels",
				Nfsd: "NFSD Fleet",
				BlackMarket: "Pirate Fleet",
				Syndicate: "Syndicate Vessels"
			};

			shipList.forEach((/** @type {{ category: string | number; }} */ ship) => {
				ship.category = mapping[ship.category] || ship.category;
			});

			shipList.sort((a, b) => {
				if (a.category < b.category) return -1;
				if (a.category > b.category) return 1;
				if (a.name < b.name) return -1;
				if (a.name > b.name) return 1;
				return 0;
			});

			shipList.forEach((ship) => {
				if (!categorizedShips[ship.category]) {
					categorizedShips[ship.category] = [];
				}
				categorizedShips[ship.category].push(ship);
			});
		} catch (error) {
			console.error("Failed to fetch ship list:", error);
		}
		if (data.post.id) {
			let output = shipList.find(ship => ship.id === data.post.id)
			if (output){
				selectedShip = output;
			}
		}

	})();
</script>
<svelte:head>
	<title>{selectedShip.name ? `${selectedShip.prefix} ${selectedShip.name} - Shipyard - Frontier Station`: 'Shipyard - Frontier Station'}</title>
	<meta name="description" content="todo" />
	<meta name="robots" content="index, follow" />
	<meta name="darkreader-lock" />
	<!-- Breaks the background when enabled so don't.-->
</svelte:head>

<main class="flex h-screen w-screen flex-col overflow-hidden">
	<div
		class="absolute z-10 m-4 w-fit rounded-lg border-[1px] border-[#343438] bg-background/90 p-2"
	>
		<div class="flex h-full">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Button variant="spacebutton" class="mx-8">
						<i class="nf nf-fa-chevron_down mr-2"></i>
						<span>Select Ship</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content>
					<ScrollArea class="h-96">
						<div class="grid grid-cols-3 gap-x-8 pb-4">
							{#each Object.entries(categorizedShips) as [category, ships]}
								<div class="col-span-3">
									<DropdownMenu.Label class="font-bold text-accent-foreground">
										{category}
									</DropdownMenu.Label>
									<DropdownMenu.Separator />
								</div>
								{#each ships as ship}
									<DropdownMenu.Item class="p-1" on:click={() => (selectedShip = ship, goto(`/shipyard?id=${ship.id}`, {replaceState: true}))} value={ship}
										>{ship.name}</DropdownMenu.Item
									>
								{/each}
							{/each}
						</div>
					</ScrollArea>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>

	<div class="flex h-full w-full items-center justify-center">
		{#if selectedShip.id}
			<img
				class=""
				src={`/shipyard/${selectedShip.id}/${selectedShip.id}-0.webp`}
				use:initPanzoom
				alt=""
			/>
		{/if}
		{#if !selectedShip.id}
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
						<li>Updated ships can take up to 24 hours to be reflected on the Shipyard.</li>
						<li>
							Report any issues to kei_shin on the <a href={config.links.discord}
								>Frontier discord!</a
							>
						</li>
					</ul>
				</div>
			</div>
		{/if}
	</div>
	{#if selectedShip.id}
		<div
			class="absolute bottom-0 z-10 m-4 w-fit max-w-xl rounded-lg border-[1px] border-[#343438] bg-background/90 px-2 py-1"
		>
			<h2 class="text-xl">{selectedShip.prefix} {selectedShip.name}</h2>
			<p>
				{selectedShip.description}
			</p>
			<p class="text-foreground/40 text-xs">
				This vessel is valued at {selectedShip.price} Spesos
			</p>
		</div>
	{/if}
</main>
