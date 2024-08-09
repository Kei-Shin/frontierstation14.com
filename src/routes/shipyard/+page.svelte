<script>
import panzoom from 'panzoom'
import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
import { Button } from "$lib/components/ui/button";
import config  from "$lib/config.js"

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
		transformOrigin: {x: 0.5, y: 0.5}
	});
}
</script>
<main class="flex flex-col h-screen w-screen overflow-hidden">
	<div class="absolute w-fit p-2 m-4 bg-background/90 rounded-lg border-[1px] border-[#343438] z-10">
		<div class="h-full flex">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger>
					<Button variant="spacebutton" class="mx-8">
						<i class="fa-solid fa-chevron-down mr-2 h-4 w-4"></i>
						<span>Select Ship</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content class="grid grid-cols-8">
					{#each config.shipyard as shipType}
					<div class="col-span-8">
						<DropdownMenu.Label>{shipType.category}</DropdownMenu.Label>
						<DropdownMenu.Separator />
					</div>
						{#each shipType.items as ship}
								<DropdownMenu.Item class="p-1" on:click={() => selectedShip = ship.imgPath} value={ship.imgPath}>{ship.name}</DropdownMenu.Item>
						{/each}
				{/each}
				</DropdownMenu.Content>
			  </DropdownMenu.Root>
		</div>
	</div>

	<div class="h-full w-full flex items-center justify-center">
		{#key selectedShip}
			<img class="" src={selectedShip} use:initPanzoom alt="">
		{/key}
	</div>
</main>



