import 'dotenv/config';

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

    let maunder, hypatia, maunderData, hypatiaData;
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
    }
    catch {
        servers[1].status = false
    }
    return new Response(JSON.stringify(servers), { status: 200 })
}