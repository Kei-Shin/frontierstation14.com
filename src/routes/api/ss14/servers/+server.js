//import 'dotenv/config'; might need not sure yet

export const GET = async () => {

    try {
        const [maunder, hypatia] = await Promise.all([
          fetch("http://167.235.179.75:1212/status"),
          fetch("http://144.48.104.34:1212/status"),
        ])
        console.log(maunder.ok)
        const servers = [await maunder.json(), await hypatia.json()]
        return new Response(JSON.stringify(servers), { status: 200 })

    }
    catch(err) {
        console.log(err)
        return new Response(null, { status: 500 })
    }

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