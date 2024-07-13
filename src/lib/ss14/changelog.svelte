<script>
// @ts-nocheck
import { onMount } from "svelte";
import yaml from "js-yaml";
import config from "$lib/config.js"

    const clClassMap = {
    Add: 'w-6 fa-solid fa-plus text-green-600',
    Remove: 'w-6 fa-solid fa-minus text-red-600',
    Tweak: 'w-6 fa-solid fa-wrench text-slate-600',
    Fix: 'w-6 fa-duotone fa-bug-slash'
    };

    let changelog = [];
    $:changelog
    async function getChangelog() {
        try {
            const res = await fetch (config.changelog.repo)
            const data = await yaml.load(await res.text())
            changelog = data.Entries.slice(-50).reverse()
        }
        catch(err) {
            console.log('Changelog is likely incorrectly configure or could not be reached!')
            console.error(err)
        }
    }
onMount(async () => {
    getChangelog()
});
</script>

<div class="max-h-96 border-accent border-[1px] p-1 overflow-auto">
    {#each changelog as item, index}
        <div class="pb-4 {index % 2 === 0 ? 'bg-background' : 'bg-background/90'}">
            <h4>{item.author}</h4>
            {#each item.changes as change}
            <div class="flex items-center gap-1">
                <i class={clClassMap[change.type] || 'fa-solid fa-question'}/>
                <p class="pb-1">{change.message}</p>
            </div>
            {/each}
        </div>
    {/each}
</div>