<script>
	import { onMount } from "svelte";
	import { Badge } from "$lib/components/ui/badge";
	import { Button } from "$lib/components/ui/button";
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { error } from "@sveltejs/kit";
	import config from "$lib/config.js";
	$: servers = config.ss14;

	/**
	 * @param {string | number | Date} round_start_time
	 */
	function parseRoundTime(round_start_time) {
		const currentTime = Date.now();
		const parsedRoundStartTime = new Date(round_start_time);
		const diffMili = currentTime - parsedRoundStartTime.getTime();

		const diffHours = Math.floor(diffMili / 3600000);

		const diffRemainingMinutes = Math.floor((diffMili % 3600000) / 60000);
		//Remember javascript is funny and you can't just foo === Nan
		if (Number.isNaN(diffHours)) {
			return "Round hasn't started";
		}
		return `${diffHours}h ${diffRemainingMinutes}m`;
	}

	function notSupported() {
		alert("Not Yet Implemented. See https://github.com/space-wizards/SS14.Launcher/pull/136");
	}

	onMount(async () => {
		async function fetchServerData() {
			try {
				const res = await fetch("/api/ss14/servers");
				if (!res.ok) {
					throw error;
				}
				const data = await res.json();
				servers = data;
				servers.forEach((server) => {
					server.timeDiff = parseRoundTime(server.round_start_time);
				});
			} catch (err) {
				console.error(err);
			}
		}
		setInterval(fetchServerData, 30000);
		fetchServerData(); //No this does not run twice
	});
</script>

{#each servers as server}
	<div class="grid w-full grid-flow-col gap-4 pb-2">
		<div>
			<h4 class="p-0">{server.name}</h4>
			<div class="flex flex-nowrap items-center gap-2">
				{#if server.status === true}
					<span>{server.region} | {server.players} Players | {server.timeDiff}</span>
					{#if server.panic_bunker === true}
						<Tooltip.Root>
							<Tooltip.Trigger>
								<Badge class="my-1 bg-yellow-600/50 hover:bg-yellow-600/50">Panic Bunker</Badge>
							</Tooltip.Trigger>
							<Tooltip.Content>
								<span
									>Panic Bunker is a tool used to help against raids and will automatically reject
									new connections unless you have at least 10 hours logged on Frontier.</span
								>
							</Tooltip.Content>
						</Tooltip.Root>
					{/if}
				{:else}
					<span>{server.region} | No response from server</span>
				{/if}
			</div>

			<!--Waiting on https://github.com/space-wizards/SS14.Launcher/pull/136 -->
			<Button
				class="my-1 w-full bg-green-800 hover:bg-green-800/75"
				variant="default"
				size="sm"
				on:click={notSupported}
			>
				Join
			</Button>
		</div>
	</div>
{/each}

<style>
</style>
