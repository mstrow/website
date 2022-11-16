<script lang="ts">
	import { links } from "$data/links";
	import { externalLink, HeaderChip, PageSection } from "$lib";
	import { Button } from "fluent-svelte";

	let scrollY: number;
</script>

<svelte:window on:scroll={() => window.requestAnimationFrame(() => scrollY = window.scrollY )} />

<PageSection id="design-section">
	<HeaderChip>Development</HeaderChip>
	<h2>I like cutting edge tech.</h2>
	<p>
		Such as toying with the new unpackaged UI framework from Microsoft, WinUI 3.0.
		I made a simple library management app to show off the new controls, and to learn how to use them.
	</p>
	<div class="design-image">
		<picture>
			<img
				alt="Library manager screenshot"
				class="files-screenshot"
				height="918"
				src="/screenshots/libraryman.png"
				style:transform="translateY({Math.floor(scrollY / -10)}px)"
				width="1193"
			>
		</picture>
		<picture>
			<!-- <source
				media="(prefers-color-scheme: dark)"
				srcset="/screenshots/win11-dark.jpg"
			>
			<source
				media="(prefers-color-scheme: light)"
				srcset="/screenshots/win11-light.jpg"
			> -->
			<img
				alt="Windows 11 wallpaper"
				class="files-wallpaper"
				height="900"
				src="/screenshots/win11-light.jpg"
				width="1440"
			>
		</picture>
	</div>
</PageSection>

<style lang="scss">
	@use "DesignSection";
</style>
