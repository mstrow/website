<script lang="ts">
	import { externalLink, PageSection } from "$lib";
	import { Button, IconButton } from "fluent-svelte";
</script>

<PageSection type="footer" id="page-footer">
	<div class="column">
		<p>Copyright © 2021 - {new Date().getFullYear()}, Mitchell Trow</p>

		<p>This site is running on a VPC provided by</p>
		<a href="https://cloudcone.com/" {...externalLink}>
			<img src="https://cloudcone.com/wp-content/uploads/2017/05/cloudcone-logo.png" alt="cloudcone logo" height="58" />
		</a>
	</div>
	<div class="column">
		<p>Based on the Community Files App Website</p>
		<Button variant="hyperlink" href={"https://files.community"} {...externalLink}>{"Website"}</Button>
		<Button variant="hyperlink" href={"https://github.com/files-community/Website"} {...externalLink}>{"Github"}</Button>
		
	</div>
	<div class="column">
		<p>Other Acknowledgements</p>
		<Button variant="hyperlink" href={"https://icons8.com"} {...externalLink}>{"Some icons from Icons8"}</Button>
	</div>
</PageSection>

<style lang="scss">
	@use "./Footer";
</style>
