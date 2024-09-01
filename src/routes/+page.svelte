<script>
	import config from "$lib/config.js";
	import ServerList from "$lib/ss14/server-list.svelte";
	import Changelog from "$lib/ss14/changelog.svelte";
</script>

<svelte:head>
	<title>Frontier Station</title>
	<meta name="description" content="todo" />
	<meta name="robots" content="index, follow" />
	<meta name="darkreader-lock" />
	<!-- Breaks the background when enabled so don't.-->
</svelte:head>
<section
	class="grid-area-hero grid h-full gap-4 p-4 lg:grid-flow-col lg:grid-cols-4 lg:grid-rows-2"
>
	<div class="SERVERLIST relative h-full rounded-lg border-[1px] border-[#343438] bg-background/90">
		<div class="flex flex-col items-center p-4">
			<h2>Server list</h2>
			<ServerList></ServerList>
		</div>
		<span class="absolute bottom-0 mb-2 w-full text-center text-xs text-foreground/40"
			>Note: Server list refreshes automatically</span
		>
	</div>
	<div
		class="PRIMARY flex h-96 lg:h-full flex-col overflow-auto rounded-lg border-[1px] border-[#343438] bg-background/90"
	>
		<div class="flex flex-col items-center p-4">
			<div>
				<h1 class="flex justify-center">Welcome to Frontier Station 14</h1>
				<p>
					Frontier Station is a unique twist on the traditional Space Station gameplay. On Frontier,
					everyone can be the captain of their own ship to venture forth and explore space beyond
					the station! Salvage, mine, research, trade, explore, or pirate your way to riches on the
					vast Frontier! Our unique game design turns regular station play on its head, instead
					relying heavily on procedural generated worlds and environments, and allowing more
					emergent forms of gameplay and RP to develop outside of traditional Space Station type of
					play.
				</p>
				<p>
					Due to the nature of our game style, many aspects of the underlying game have been
					modified to provide a better overall experience on the Frontier. Expeditions are hand
					tailored to allow a more relaxing and less stressful experience, many game systems have
					been slowed down and had their balance tweaked to allow for a more semi-persistent type
					game world.
				</p>
				<div class="flex justify-center pt-2">
					<p>
						For more info&nbsp;<a href={config.links.wiki}>check out the wiki</a>&nbsp;or jump in
						game and found out for yourself.
					</p>
				</div>
			</div>
		</div>
	</div>
	<div
		class="SECONDARY flex h-full flex-col overflow-auto rounded-lg border-[1px] border-[#343438] bg-background/90"
	>
		<div class="p-2">
			<div class="flex justify-between">
				<h3 class="font-bold">Changelog</h3>
				<a href="{config.links.github}/pulls?q=is%3Apr+is%3Amerged" class="flex items-center"
					><i class="fa-regular fa-arrow-up-right-from-square mr-1 h-4 w-4"></i>View on Github</a
				>
			</div>
			<Changelog></Changelog>
		</div>
	</div>
</section>

<style>
	@media screen and (min-width: 900px) {
		.grid-area-hero {
			grid-template-areas:
				"PRIMARY PRIMARY PRIMARY PRIMARY"
				"PRIMARY PRIMARY PRIMARY PRIMARY"
				"SECONDARY SECONDARY SECONDARY SERVERLIST"
				"SECONDARY SECONDARY SECONDARY SERVERLIST"
				"SECONDARY SECONDARY SECONDARY SERVERLIST";
		}
		.PRIMARY {
			grid-area: PRIMARY;
		}
		.SECONDARY {
			grid-area: SECONDARY;
		}
		.SERVERLIST {
			grid-area: SERVERLIST;
		}
	}
</style>
