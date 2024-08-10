<script>
	import "../app.css";
	import "$lib/fontawesome/brands.min.js";
	import "$lib/fontawesome/solid.min.js";
	import "$lib/fontawesome/regular.min.js";
	import "$lib/fontawesome/duotone.min.js";
	import "$lib/fontawesome/fontawesome.min.js";
	import config from "$lib/config.js";
	import { Button } from "$lib/components/ui/button";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
</script>

<main class="flex w-full flex-col sm:h-screen">
	<div class="h-24 w-full px-4 pt-4">
		<div class="h-full rounded-lg border-[1px] border-[#343438] bg-background/90">
			<div class="flex h-full justify-between">
				<a class="flex max-h-24" href="/"
					><img class="p-4" src="/frontierstation_logo.webp" alt="Frontier Station Logo" /></a
				>
				<div class="flex items-center lg:hidden">
					<DropdownMenu.Root>
						<DropdownMenu.Trigger>
							<Button variant="spacebutton" class="mx-8">
								<i class="fa-solid fa-chevron-down mr-2 h-4 w-4"></i>
								<span>Menu</span>
							</Button>
						</DropdownMenu.Trigger>
						<DropdownMenu.Content>
							<DropdownMenu.Item href={config.links.discord}>
								<i class="fa-brands fa-discord mr-2 h-4 w-4"></i>
								<span>Discord</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item href={config.links.forums}>
								<i class="fa-solid fa-comments mr-2 h-4 w-4"></i>
								<span>Forums</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item href="/shipyard">
								<i class="fa-solid fa-rocket-launch mr-2 h-4 w-4"></i>
								<span>Shipyard</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item href={config.links.wiki}>
								<i class="fa-solid fa-book-blank mr-2 h-4 w-4"></i>
								<span>Wiki</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item href={config.links.github}>
								<i class="fa-brands fa-github mr-2 h-4 w-4"></i>
								<span>Github</span>
							</DropdownMenu.Item>
							<DropdownMenu.Separator />
							<DropdownMenu.Item href={config.links.donate}>
								<i class="fa-solid fa-dollar-sign mr-2 h-4 w-4"></i>
								<span>Donate</span>
							</DropdownMenu.Item>
						</DropdownMenu.Content>
					</DropdownMenu.Root>
				</div>
				<div class="hidden items-center justify-center gap-3 px-3 lg:flex">
					<Button variant="spacebutton" href={config.links.discord}>
						<i class="fa-brands fa-discord mr-2 h-4 w-4"></i>
						<span>Discord</span>
					</Button>
					<Button variant="spacebutton" href={config.links.forums}>
						<i class="fa-solid fa-comments mr-2 h-4 w-4"></i>
						<span>Forums</span>
					</Button>
					<Button variant="spacebutton" href="/shipyard">
						<i class="fa-solid fa-rocket-launch mr-2 h-4 w-4"></i>
						<span>Shipyard</span>
					</Button>
					<Button variant="spacebutton" href={config.links.wiki}>
						<i class="fa-solid fa-book-blank mr-2 h-4 w-4"></i>
						<span>Wiki</span>
					</Button>
					<Button variant="spacebutton" href={config.links.github}>
						<i class="fa-brands fa-github mr-2 h-4 w-4"></i>
						<span>Github</span>
					</Button>
					<Button variant="spacebutton" href={config.links.donate}>
						<i class="fa-solid fa-dollar-sign mr-2 h-4 w-4"></i>
						<span>Donate</span>
					</Button>
				</div>
			</div>
		</div>
	</div>
	<slot></slot>
</main>

<div class="bg-img-space"></div>

<!--For global styles see app.css-->
<style>
	@keyframes scroll {
		from {
			background-position: 0 0;
		}
		to {
			background-position: -500vw 500vh;
		}
	}
	.bg-img-space {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		z-index: -1;
		background: url("/space_map2.webp") 0% 0% repeat;
		background-size: cover;
		animation: scroll 300s linear infinite;
	}
	@media (prefers-reduced-motion), (max-width: 900px) {
		.bg-img-space {
			animation: none;
		}
	}
</style>
