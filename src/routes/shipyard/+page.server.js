export async function load({ fetch, url, params }) {
	async function getEnabledShips() {
		try {
			const response = await fetch("shipyard/enabledShips.json");
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const jsonData = await response.json();
			return jsonData;
		} catch (error) {
			console.error("Error fetching or parsing JSON:", error);
		}
	}
	let shipList = getEnabledShips();
	const id = url.searchParams.get('id');
	return {
		post: {
			shipList: shipList,
			id: id
		}
	};
}
