<script>
    import { Button } from "$lib/components/ui/button";
    let servers = 
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
            round_start_time: ''
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
            round_start_time: ''
        }
    ]

  
</script>
<svelte:head>
    <title>Title</title>
    <meta name="description" content="Description" />
    <meta name="robots" content="index, follow" />
    <meta name="darkreader-lock"> <!-- Breaks the background when enabled so don't.-->
</svelte:head>
<style>
    .bg-img-space {
        height: 100vh;
        width: max-content;
        display: flex;
        flex-wrap: wrap;
        z-index: -10;
        animation: scroll 120s linear infinite;
    }
    @keyframes scroll {
        to {
            transform: translate(-50%)
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
<div class="w-screen h-screen overflow-hidden bg-black">
    <div class="bg-img-space">
        <img src="/space_map2.webp" alt="">
        <img src="/space_map2.webp" alt="">
    </div>
    <!-- This is absolutely weird and other jokes you can tell yourself vol.2 -->
    <!-- I will return to this later -->
    <div class="absolute top-0 w-full overflow-hidden">
        <div class="h-4 w-full"></div>
        <div class="h-20 w-full">
            <div class="h-20 w-full px-4">
                <div class="h-full bg-[#1E1E22] bg-opacity-80 rounded-lg border-[1px] border-[#343438]">
                    <img class="" src="/frontierstation_logo.webp" alt="Frontier Station Logo">
                </div>
            </div>
        </div>
        <section class="h-[calc(100vh-4rem)] grid lg:grid-flow-col lg:grid-cols-4 lg:grid-rows-2 grid-area-hero p-4 gap-4 text-stone-300">
            <div class="h-full bg-[#1E1E22] bg-opacity-80 rounded-lg border-[1px] border-[#343438] PRIMARY">
                <div class="flex flex-col items-center p-4">
                    <div>
                        <h2 class="flex justify-center">Welcome to Frontier Station 14</h2>
                        <p>Frontier Station is a unique twist on the traditional Space Station gameplay. On Frontier, everyone can be the captain of their own ship to venture forth and explore space beyond the station! Salvage, mine, research, trade, explore, or pirate your way to riches on the vast Frontier! Our unique game design turns regular station play on its head, instead relying heavily on procedural generated worlds and environments, and allowing more emergent forms of gameplay and RP to develop outside of traditional Space Station type of play.</p>
                        <p>Due to the nature of our game style, many aspects of the underlying game have been modified to provide a better overall experience on the Frontier. Expeditions are hand tailored to allow a more relaxing and less stressful experience, many game systems have been slowed down and had their balance tweaked to allow for a more semi-persistent type game world.</p>
                        <p class="flex justify-center pt-2">For more info check out the wiki or jump in game and found out for yourself.</p>
                    </div>
                </div>
            </div>
            <div class="h-full bg-[#1E1E22] bg-opacity-80 rounded-lg border-[1px] border-[#343438] overflow-hidden">
                <!-- Important links -->
                 <div class="flex flex-col items-center p-4">
                    <h4 class="font-bold">Important Links</h4>
                    <div class="grid grid-flow-row gap-4 text-center" style="grid-template-columns: repeat(auto-fit,minmax(10rem, 1))">
                        <a href="https://frontierstation14.com/index.php/Main_Page"><h5>Wiki</h5></a>
                        <a href="https://discord.gg/djPwrSPpf7"><h5>Discord</h5></a>
                        <a href="https://www.patreon.com/FrontierStation14"><h5>Patreon</h5></a>
                        <a href="https://github.com/new-frontiers-14/frontier-station-14/"><h5>Github</h5></a>
                        <a href="/"><h5>Ships</h5></a>
                        <a href="/"><h5>Rules</h5></a> <!--Same page need to edit primary panel-->
                    </div>
                 </div>

            </div>
            <div class="h-full bg-[#1E1E22] bg-opacity-80 rounded-lg border-[1px] border-[#343438]">
                <!-- Server List -->
                <div class="flex flex-col items-center p-4">
                    <h4 class="font-bold">Server list</h4>
                    {#each servers as server}
                        <div class="w-full grid grid-flow-col gap-4 pb-2">
                            <img class="flex justify-center items-start"src="" alt="{server.region}">
                            <div>
                                <h4 class="p-0">{server.name}</h4>
                                <p class="p-0">{server.players}/{server.soft_max_players} - 00:00:00</p>
                                {#if server.panic_bunker === true}<p class="p-0">Panic Bunker is active!</p>{/if}
                                <a href="/"><p class="p-0">Join</p></a>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
        </section>
        <div class="h-8 w-full"></div>
    </div>
  
</div>