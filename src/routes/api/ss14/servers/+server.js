import config from "$lib/config.js";

export const GET = async () => {
	/**
	 * @param {string | URL | Request} address
	 */
	async function fetchServerStatus(address) {
		try {
			const res = await fetch(address);
			if (!res.ok) {
				throw new Error();
			}
			const data = await res.json();
			return {
				status: true,
				players: data.players || "0", // 0 is technically null so it orginally returned ?? when it should be zero thanks Hypatia lol
				soft_max_players: data.soft_max_players || "??",
				round_start_time: data.round_start_time || "",
				panic_bunker: data.panic_bunker || false
			};
		} catch {
			return {
				status: false,
				players: "??",
				soft_max_players: "??",
				round_start_time: "",
				panic_bunker: false
			};
		}
	}

	async function createServerArray() {
		const servers = [];

		for (const server of config.ss14) {
			const statusData = await fetchServerStatus(server.address);

			servers.push({
				address: server.address,
				name: server.name,
				region: server.region,
				status: statusData.status,
				players: statusData.players,
				soft_max_players: statusData.soft_max_players,
				panic_bunker: statusData.panic_bunker,
				round_start_time: statusData.round_start_time,
				timeDiff: "" //Leave blank, client can parse this how they want.
			});
		}

		return servers;
	}

	const servers = await createServerArray();
	return new Response(JSON.stringify(servers), { status: 200 });
};
