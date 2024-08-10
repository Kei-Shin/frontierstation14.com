<script>
	// @ts-nocheck
	import { onMount } from "svelte";
	import yaml from "js-yaml";
	import config from "$lib/config.js";
	import { Skeleton } from "$lib/components/ui/skeleton/index.js";

	const clClassMap = {
		Add: "w-6 fa-solid fa-plus text-green-600",
		Remove: "w-6 fa-solid fa-minus text-red-600",
		Tweak: "w-6 fa-solid fa-wrench text-slate-600",
		Fix: "w-6 fa-duotone fa-bug-slash"
	};
	function isNewDay(currentTime, previousTime) {
		const currentDate = new Date(currentTime).toISOString().split("T")[0];
		const previousDate = previousTime ? new Date(previousTime).toISOString().split("T")[0] : null;
		return previousDate === null || currentDate !== previousDate;
	}
	let changelog = [];
	$: changelog;
	async function getChangelog() {
		try {
			const res = await fetch(config.changelog.repo);
			const data = await yaml.load(await res.text());
			changelog = data.Entries.slice(-50).reverse();
		} catch (err) {
			console.log("Changelog is likely incorrectly configure or could not be reached!");
			console.error(err);
		}
	}
	onMount(async () => {
		getChangelog();
	});
</script>

<div
	class="max-h-96 border-[1px] border-accent sm:h-96 {changelog.length === 0
		? 'overflow-hidden'
		: 'overflow-auto'}"
>
	{#if changelog.length === 0}
		<div class="flex items-center space-x-4">
			<div class="space-y-2 p-1">
				<Skeleton class="h-8 w-52 pb-4" />
				<Skeleton class="h-6 w-64 pb-4" />
				<div class="flex items-center space-x-4">
					<Skeleton class="h-4 w-4 pb-4" />
					<Skeleton class="h-6 w-[768px] pb-4" />
				</div>
				<div class="flex items-center space-x-4">
					<Skeleton class="h-4 w-4 pb-4" />
					<Skeleton class="h-12 w-[768px] pb-4" />
				</div>
				<Skeleton class="h-6 w-52 pb-4" />
				<div class="flex items-center space-x-4">
					<Skeleton class="h-4 w-4 pb-4" />
					<Skeleton class="h-6 w-[512px] pb-4" />
				</div>
				<div class="flex items-center space-x-4">
					<Skeleton class="h-4 w-4 pb-4" />
					<Skeleton class="h-6 w-[256px] pb-4" />
				</div>
				<div class="flex items-center space-x-4">
					<Skeleton class="h-4 w-4 pb-4" />
					<Skeleton class="h-6 w-[512px] pb-4" />
				</div>
				<div class="flex items-center space-x-4">
					<Skeleton class="h-4 w-4 pb-4" />
					<Skeleton class="h-6 w-[512px] pb-4" />
				</div>
				<Skeleton class="h-8 w-52 pb-4" />
				<Skeleton class="h-6 w-64 pb-4" />
			</div>
		</div>
	{:else}
		{#each changelog as item, index}
			<div class="p-1 pb-4 {index % 2 === 0 ? 'bg-background' : 'bg-accent/5'}">
				{#if isNewDay(item.time, changelog[index - 1]?.time) === true}
					<h4 class="pl-1 font-bold text-accent-foreground">
						{new Date(item.time).toLocaleDateString("en-US", {
							timeZone: "UTC",
							month: "long",
							day: "numeric",
							year: "numeric"
						})}
					</h4>
					<h4 class="font-semibold">{item.author}</h4>
				{:else}
					<h4 class="font-semibold">{item.author}</h4>
				{/if}
				{#each item.changes as change}
					<div class="flex items-center gap-1">
						<i class={clClassMap[change.type] || "fa-solid fa-question"} />
						<p class="pb-1">{change.message}</p>
					</div>
				{/each}
			</div>
		{/each}
	{/if}
</div>
