import config from "$lib/config.js";

export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith("/index.php")) {
		const redirectUrl = `${config.links.wiki}${event.url.pathname}`;
		return new Response(null, {
			status: 301, //Moved Permenantly 
			headers: {
				Location: redirectUrl
			}
		});
	}

	return await resolve(event);
}
