<script>
	import { ScrollArea as ScrollAreaPrimitive } from "bits-ui";
	import { cn } from "$lib/utils.js";
	let className = undefined;
	export let orientation = "vertical";
	export { className as class };
</script>

<ScrollAreaPrimitive.Scrollbar
	{orientation}
	class={cn(
		"flex touch-none select-none transition-colors !visible",
		orientation === "vertical" && "h-full w-2 border-l border-l-transparent p-px",
		orientation === "horizontal" && "h-2 w-full border-t border-t-transparent p-px",
		className
	)}
>
	<slot />
	<ScrollAreaPrimitive.Thumb
		class={cn("bg-accent relative rounded-full !visible", orientation === "vertical" && "flex-1")}
	/>
</ScrollAreaPrimitive.Scrollbar>