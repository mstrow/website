<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";
	import { onMount } from "svelte";

	import { Footer, Navbar } from "$layout";
	import { links, type NavbarItem } from "$data/links";
	import { docs } from "$data/docs";

	import "fluent-svelte/theme.css";

	import Chat from "@fluentui/svg-icons/icons/chat_24_regular.svg?raw";
	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
	import Home from "@fluentui/svg-icons/icons/home_24_regular.svg?raw";
	import Book from "@fluentui/svg-icons/icons/book_24_regular.svg?raw";
	import News from "@fluentui/svg-icons/icons/news_24_regular.svg?raw";
	import Page from "./+page.svelte";
	// import PaintBrush from "@fluentui/svg-icons/icons/paint_brush_24_regular.svg?raw";

	const { github, discord } = links;
	export const prerender = true;

	const navbarItems: NavbarItem[] = [
		{
			name: "Portfolio",
			path: "/",
			icon: Home
		}
		// {
		// 	name: "Projects",
		// 	path: "/projects",
		// 	icon: Code
		// }
		// {
		// 	name: "Docs",
		// 	path: "/docs",
		// 	sidebarTree: docs,
		// 	icon: Book
		// },
		// {
		// 	name: "Blog",
		// 	path: "/blog",
		// 	icon: News
		// }
	];

	// const navbarButtons = [
	// 	{
	// 		label: "Discord",
	// 		href: `https://discord.gg/${ discord }`,
	// 		icon: Chat
	// 	},
	// 	{
	// 		label: "GitHub",
	// 		href: `https://github.com/${ github.owner }/${ github.repo }`,
	// 		icon: Code
	// 	}
	// ];

	let theme: "light" | "dark" = "light";

	onMount(() => {
		theme = window?.matchMedia("(prefers-color-scheme: dark)")?.matches ? "dark" : "light";

		window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
			theme = e.matches ? "dark" : "light";
		});
	});

</script>

<svelte:head>
	<meta content="mstrow.dev" name="og:site_name">

	<meta content="website" name="og:type">
	<link rel="icon" type="image/svg" href={"/ui/icons/favicon.ico"} />
</svelte:head>

<Navbar items={navbarItems} />
<!-- <Navbar buttons={navbarButtons} items={navbarItems} /> -->
<slot />
<Footer />

<style global lang="scss">
	@use "src/styles/global";
	@use "src/styles/markdown";
</style>
