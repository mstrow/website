<script lang="ts">
	import { externalLink, PageSection, TerminalCommand } from "$lib";
	import { Button, ContentDialog, MenuFlyout, MenuFlyoutItem } from "fluent-svelte";
	import { links } from "$data/links";
	import { onMount } from "svelte";
	import ArrowDownload from "@fluentui/svg-icons/icons/arrow_download_24_regular.svg?raw";
	import Code from "@fluentui/svg-icons/icons/code_24_regular.svg?raw";
	import AppGeneric from "@fluentui/svg-icons/icons/app_generic_24_regular.svg?raw";
	

</script>

<PageSection id="hero-section">
	<div class="hero-left">
		<h1>Mitchell Trow</h1>
		<p>23 • Kiwi 🥝 🇳🇿 • Student • Bachelor of Information Technology</p>
		<div class="buttons-spacer">
			<!-- <Button
					id="hero-download-button"
					variant="accent"
					href=""
			>
			{@html ArrowDownload}
				<div class="hero-button-inner">
					<h5>Download CV</h5>
					<span>It's a PDF</span>
				</div>
			</Button> -->
			<Button
				href="/projects"
				variant="accent"
			>
				{@html AppGeneric}
				<div class="hero-button-inner">
					<h5>View projects</h5>
					<span>Degree and personal</span>
				</div>
			</Button>
			<Button
				href="https://github.com/{links.github.owner}/"
				{...externalLink}
			>
				{@html Code}
				<div class="hero-button-inner">
					<h5>View GitHub</h5>
					<span>My code is open source!</span>
				</div>
			</Button>
		</div>
	</div>
	<div class="hero-right">
		<div class="hero-image-container">
			<picture>
				<img
					alt="Files new tab screenshot"
					height="768"
					src="/screenshots/img_trans.webp"
					width="1024"
				>
			</picture>
		</div>
	</div>
	<div class="rainbow-background" slot="outer"></div>
</PageSection>

<style lang="scss">
	@use "HeroSection";
</style>
