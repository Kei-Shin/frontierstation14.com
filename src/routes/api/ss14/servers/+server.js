//import 'dotenv/config'; might need not sure yet

export const GET = async () => {
    let servers = 
    [
        {
            address: 'http://167.235.179.74:1212/status',
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
    /**
     * @param {string | number | Date} round_start_time
     */
    function parseTime(round_start_time) {
        const parsedRoundStartTime = new Date(round_start_time)
        const diffMili = currentTime - parsedRoundStartTime.getTime();
        
        const diffHours = Math.floor(diffMili / 3600000);

        const diffRemainingMinutes = Math.floor(diffMili % 3600000 / 60000);
        return (`${diffHours}h ${diffRemainingMinutes}m`)
    }
    let maunder, hypatia, maunderData, hypatiaData;
    const currentTime = Date.now();
    try {
        maunder = await fetch("http://167.235.179.74:1212/status");
        if (!maunder.ok) {
            throw new Error
        }
        maunderData = await maunder.json()
        servers[0].status = true;
        servers[0].players = maunderData.players;
        servers[0].soft_max_players = maunderData.soft_max_players;
        servers[0].panic_bunker = maunderData.panic_bunker;
        servers[0].round_start_time = maunderData.round_start_time;
        servers[0].timeDiff = parseTime(maunderData.round_start_time)

    }
    catch {
        servers[0].status = false
    }
    try {
        hypatia = await fetch("http://144.48.104.34:1212/status")
        if (!hypatia.ok) {
            throw new Error
        }
        hypatiaData = await hypatia.json()
        servers[1].status = true;
        servers[1].players = hypatiaData.players;
        servers[1].soft_max_players = hypatiaData.soft_max_players;
        servers[1].panic_bunker = hypatiaData.panic_bunker;
        servers[1].round_start_time = hypatiaData.round_start_time;
        servers[1].timeDiff = parseTime(hypatiaData.round_start_time)
    }
    catch {
        servers[1].status = false
    }
    return new Response(JSON.stringify(servers), { status: 200 })


/*
    try {
        const maunder = await fetch('http://167.235.179.74:1212/status')
        .then(res => {
            
        })
        const hypatia = await fetch('http://144.48.104.34:1212/status')
        const servers = [maunder, hypatia ];
        let serversJson = [];
        servers.forEach(async (server) => {
            if (!server.ok) {
                throw new Error(`Server down? Status: ${server.status}`)
            }
            const serverJson = await server.json();
            serversJson.push(serverJson)
        });
    }
    catch (err) {
        console.error(err)
        return new Response(null, { status: 500 })

    }
*/
}