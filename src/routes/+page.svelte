<script>
    import { Badge } from "$lib/components/ui/badge";
    import { Button } from "$lib/components/ui/button";
    import * as Tooltip from "$lib/components/ui/tooltip/index.js";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
	import { onMount } from "svelte";
    $: servers = 
    [
        {
            address: 'http://167.235.179.75:1212/status',
            last_ping: '',
            name: 'Maunder Sector',
            region: 'EU West 1',
            status: false,
            players: '??',
            soft_max_players: '??',
            panic_bunker: true,
            round_start_time: '',
            timeDiff: ''
        },
        {
            address: 'http://144.48.104.34:1212/status',
            last_ping: '',
            name: 'Hypatia Sector',
            region: 'US East 1',
            status: false,
            players: '??',
            soft_max_players: '??',
            panic_bunker: false,
            round_start_time: '',
            timeDiff: ''
        }
    ]    

    onMount(async () => {
        try {
            const res = await fetch("/api/ss14/servers")
            const data = await res.json();
            console.log(data[0].round_start_time)
            servers = data
        }
        catch(err) {
            console.error(err)
        }
        })
    
    const commonLinks = {
        discord: 'https://discord.gg/djPwrSPpf7',
        forums: 'https://forums.arckei.net',
        wiki: 'https://frontierstation14.com',
        github: 'https://github.com/new-frontiers-14/frontier-station-14',
        donate: 'https://www.patreon.com/FrontierStation14'
    }

  
</script>
<svelte:head>
    <title>Frontier Station</title>
    <meta name="description" content="todo" />
    <meta name="robots" content="index, follow" />
    <meta name="darkreader-lock"> <!-- Breaks the background when enabled so don't.-->
</svelte:head>
<style>
    .bg-img-space {
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: -1;
        background: url('/space_map2.webp') 0% 0% repeat;
        background-size: cover;
        animation: scroll 300s linear infinite;
    }
    @keyframes scroll {
    from {
        background-position: 0 0;
	}
	to { 
		background-position: -500vw 500vh;
	}
}
    @media (prefers-reduced-motion),  (max-width: 900px) {
        .bg-img-space {
            animation: none;
        }
    }
    @media screen and (min-width: 900px) {
        .grid-area-hero {
            grid-template-areas: 
            "PRIMARY PRIMARY PRIMARY ."
            "PRIMARY PRIMARY PRIMARY ."
            "PRIMARY PRIMARY PRIMARY .";
        }
        .PRIMARY {
            grid-area: PRIMARY;
        }
    }
</style>

<main class="flex flex-col sm:h-screen w-full">
    <div class="h-24 w-full px-4 pt-4">
        <div class="h-full bg-background/90 rounded-lg border-[1px] border-[#343438]">
            <div class="h-full flex justify-between">
                <img class="p-4" src="/frontierstation_logo.webp" alt="Frontier Station Logo">
                <DropdownMenu.Root>
                    <DropdownMenu.Trigger class="lg:hidden">
                        <Button variant="spacebutton" class="mx-8">
                            <i class="fa-solid fa-chevron-down mr-2 h-4 w-4"></i>
                            <span>Menu</span>
                        </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                        <DropdownMenu.Item href={commonLinks.discord}>
                            <i class="fa-brands fa-discord mr-2 h-4 w-4"></i>
                            <span>Discord</span>
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item href={commonLinks.forums}>
                            <i class="fa-solid fa-comments mr-2 h-4 w-4"></i>
                            <span>Forums</span>
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item href={commonLinks.wiki}>
                            <i class="fa-solid fa-book-blank mr-2 h-4 w-4"></i>
                            <span>Wiki</span>
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item href={commonLinks.github}>
                            <i class="fa-brands fa-github mr-2 h-4 w-4"></i>
                            <span>Github</span>
                          </DropdownMenu.Item>
                          <DropdownMenu.Separator />
                          <DropdownMenu.Item href={commonLinks.donate}>
                            <i class="fa-solid fa-dollar-sign mr-2 h-4 w-4"></i>
                            <span>Donate</span>
                          </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Root>
                <div class="hidden lg:flex justify-center items-center px-8 gap-4">
                    <Button variant="spacebutton" href={commonLinks.discord}>
                        <i class="fa-brands fa-discord mr-2 h-4 w-4"></i>
                        <span>Discord</span>
                    </Button>
                    <Button variant="spacebutton" href={commonLinks.forums}>
                        <i class="fa-solid fa-comments mr-2 h-4 w-4"></i>
                        <span>Forums</span>
                    </Button>
                    <Button variant="spacebutton" href={commonLinks.wiki}>
                        <i class="fa-solid fa-book-blank mr-2 h-4 w-4"></i>
                        <span>Wiki</span>
                    </Button>
                    <Button variant="spacebutton" href={commonLinks.github}>
                        <i class="fa-brands fa-github mr-2 h-4 w-4"></i>
                        <span>Github</span>
                    </Button>
                    <Button variant="spacebutton" href={commonLinks.donate}>
                        <i class="fa-solid fa-dollar-sign mr-2 h-4 w-4"></i>
                        <span>Donate</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>
    <section class="h-full grid lg:grid-flow-col lg:grid-cols-4 lg:grid-rows-2 grid-area-hero p-4 gap-4">
        <div class="h-full bg-background/90 rounded-lg border-[1px] border-[#343438] PRIMARY flex flex-col overflow-auto">
            <div class="flex flex-col items-center p-4">
                <div>
                    <h1 class="flex justify-center">Welcome to Frontier Station 14</h1>
                    <p>Frontier Station is a unique twist on the traditional Space Station gameplay. On Frontier, everyone can be the captain of their own ship to venture forth and explore space beyond the station! Salvage, mine, research, trade, explore, or pirate your way to riches on the vast Frontier! Our unique game design turns regular station play on its head, instead relying heavily on procedural generated worlds and environments, and allowing more emergent forms of gameplay and RP to develop outside of traditional Space Station type of play.</p>
                    <p>Due to the nature of our game style, many aspects of the underlying game have been modified to provide a better overall experience on the Frontier. Expeditions are hand tailored to allow a more relaxing and less stressful experience, many game systems have been slowed down and had their balance tweaked to allow for a more semi-persistent type game world.</p>
                    <p class="flex justify-center pt-2">For more info check out the wiki or jump in game and found out for yourself.</p>
                </div>
            </div>
            <div class="px-8">
                <div class="flex items-center gap-1">
                    <Button variant="spacetab">Changelog</Button>
                    <Button variant="spacetab">Recent Rounds?</Button>
                    <Button variant="spacetab">Rules?</Button>
                </div>
                <div class="h-full border-accent border-[1px]"></div>
            </div>
        </div>
        <div class="h-full bg-background/90 rounded-lg border-[1px] border-[#343438] overflow-hidden">
            <!-- Important links -->
            <div class="flex flex-col items-center p-4">
                <h4>Feeling cute might remove this later</h4>
                <div class="grid grid-flow-row gap-4 text-center" style="grid-template-columns: repeat(auto-fit,minmax(10rem, 1))">
                </div>
            </div>
        </div>
        <div class="h-full bg-background/90 rounded-lg border-[1px] border-[#343438]">
            <!-- Server List -->
            <div class="flex flex-col items-center p-4">
                <h2>Server list</h2>
                {#each servers as server}
                    <div class="w-full grid grid-flow-col gap-4 pb-2">
                        <div>
                            <h4 class="p-0">{server.name}</h4>
                            <p class="p-0">{server.region} | {server.players} Players | {server.timeDiff}</p>
                            {#if server.panic_bunker === true}
                            <Tooltip.Root>
                                <Tooltip.Trigger>
                                    <Badge class="bg-yellow-600/50 hover:bg-yellow-600/50 my-1">Panic Bunker is active!</Badge>
                                </Tooltip.Trigger>
                                <Tooltip.Content>
                                    <span>Panic Bunker is a tool used to help against raids and will automatically reject new connections unless you have at least 10 hours logged on Frontier.</span>
                                </Tooltip.Content>
                                </Tooltip.Root>
                            {/if}
                            <!--Waiting on https://github.com/space-wizards/SS14.Launcher/pull/136 -->
                            <Button class="bg-green-800 hover:bg-green-800/75 w-full" variant="default" size="sm">
                            Join
                            </Button>
                        </div>
                    </div>
                {/each}
            </div>
        </div>
    </section>
</main>
<div class="bg-img-space"></div>
