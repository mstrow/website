<script lang="ts">
	import { onMount } from "svelte";

	import { FeatureCard, HeaderChip, PageSection } from "$lib";

	import FeatureShowcase from "./FeatureShowcase.svelte";
	import { dev } from "$app/environment";
	import PreviewShowcase from "./preview/PreviewShowcase.svelte";

	let currentFeature = 0;

	let cardPaginationInterval = 16;

	// onMount(() => {
	// 	if (!dev) {
	// 		// Iterate through feature cards every n seconds
	// 		setInterval(
	// 			() => {
	// 				//currentFeature += currentFeature !== 3 ? 1 : -currentFeature;
	// 				cardPaginationInterval = 16;
	// 			},
	// 			cardPaginationInterval * 1000
	// 		);
	// 	}
	// });
</script>

<PageSection id="features-section">
	<div class="features-section-left">
		<PreviewShowcase/>
	</div>
	<div class="features-section-right">
		<HeaderChip>Skills</HeaderChip>
		<h2>My experience and confidence</h2>
		<p>
			I like using a wide-range of technologies and tools to solve problems.
			Here's a sample of the ones I like the most and have the most experience with.
		</p>
		<hr>
		<!-- <div class="feature-cards-container">
			{#each featureCards as feature, i}
				<FeatureCard
					on:click={() => {
						currentFeature = i;
						cardPaginationInterval = 24;
					}}
					clickable
					selected={currentFeature === i}
					description={feature.description}
					icon={feature.icon}
				>
					{feature.title}
				</FeatureCard>
			{/each}
		</div> -->
	</div>
</PageSection>

<style lang="scss">
	@use "FeaturesSection";
</style>
