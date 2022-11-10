<script lang="ts">
	import { navigating, page } from "$app/stores";
	import type { NavbarItem } from "$data/links";

	import { externalLink, TreeView } from "$lib";
	import { ListItem, Tooltip } from "fluent-svelte";
	import Navigation from "@fluentui/svg-icons/icons/navigation_24_regular.svg?raw";

	export let items: NavbarItem[] = [];
	export let buttons = [];

	let innerWidth = 649; // Don't render the mobile layout before hydration
	let sidebarVisible = false;
	let sidebar: HTMLElement;
	let sidebarButton: HTMLButtonElement;

	const toggleSidebar = () => {
		sidebarVisible = !sidebarVisible;
	};

	const handleOuterClick = (e: MouseEvent) => {
		if (!(
			!sidebarVisible ||
			e.target === sidebarButton ||
			sidebarButton.contains(e.target as Node) ||
			e.target === sidebar ||
			sidebar.contains(e.target as Node)
		)) {
			toggleSidebar();
		}
	}

	$: {
		$navigating && (sidebarVisible = false);
	}
</script>

<svelte:window bind:innerWidth on:click={handleOuterClick} />

<header class="navbar">
	<nav class="inner">
		<a class="logo" href="/" sveltekit:prefetch>
			<picture>
				<img
					alt="mstrow.dev logo"
					class="logo-image"
					height="48"
					src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQwIiBoZWlnaHQ9IjI0MCIKdmlld0JveD0iMCAwIDQ4IDQ4Ij4KPGxpbmVhckdyYWRpZW50IGlkPSJPdHVVQV9naXBQS2syTmpwMlRmbjdhX2t0dXE4NzZEem1FaV9ncjEiIHgxPSI0LjY4OSIgeDI9IjguMDQyIiB5MT0iMTUuMDA3IiB5Mj0iMzQuMDIzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjlmOWY5Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODA4IiBzdG9wLWNvbG9yPSIjYzJjOGNjIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2Ffa3R1cTg3NkR6bUVpX2dyMSkiIGQ9Ik01LjA4NSwyMC43OEM1LjA4NSwyMC43OCw2LDIzLDYsMjZzLTAuOTE1LDUuMjItMC45MTUsNS4yMlM5LDMwLDksMjYJUzUuMDg1LDIwLjc4LDUuMDg1LDIwLjc4eiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iT3R1VUFfZ2lwUEtrMk5qcDJUZm43Yl9rdHVxODc2RHptRWlfZ3IyIiB4MT0iNy41NjQiIHgyPSI5LjYxOSIgeTE9IjE5LjYyOCIgeTI9IjMxLjI4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmQ2ZDZkIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuMTI1IiBzdG9wLWNvbG9yPSIjNjI2MjYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuOTg3IiBzdG9wLWNvbG9yPSIjNDY0NjQ2Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuOTk4IiBzdG9wLWNvbG9yPSIjNDU0NTQ1Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2Jfa3R1cTg3NkR6bUVpX2dyMikiIGQ9Ik01LjcxNiwyMC4wNDlsLTAuMDAyLDAuMDAzCUM1LjY0OSwyMC4wMjEsNS41NzgsMjAsNS41LDIwQzUuMjI0LDIwLDUsMjAuMjI0LDUsMjAuNWMwLDAuMTE3LDAuMDQzLDAuMjIxLDAuMTExLDAuMzA1YzAuMDIzLDAuMDI4LDAuMTY5LDAuMTY1LDAuMjkyLDAuMjcxCUM2LjA2OCwyMS42NTIsOCwyMy40NjgsOCwyNmMwLDIuNTMyLTEuOTMyLDQuMzQ4LTIuNTk3LDQuOTI0Yy0wLjEyMywwLjEwNi0wLjI2OSwwLjI0My0wLjI5MiwwLjI3MUM1LjA0MywzMS4yNzksNSwzMS4zODMsNSwzMS41CUM1LDMxLjc3Niw1LjIyNCwzMiw1LjUsMzJjMC4wNzgsMCwwLjE0OS0wLjAyMSwwLjIxNC0wLjA1MmwwLjAwMiwwLjAwM0M2LjQ5MSwzMS42MjQsOC44MzgsMzAuNDgsMTEsMjkuNTA2TDEzLDI4di00bC0xLTEuMDYzCUM5LjYxNiwyMS45MDEsNi42MTMsMjAuNDI3LDUuNzE2LDIwLjA0OXoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN2Nfa3R1cTg3NkR6bUVpX2dyMyIgeDE9IjMwLjM4IiB4Mj0iMzEuNjQzIiB5MT0iMzkuMjg2IiB5Mj0iNDYuNDQ2IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIuMDAyIiBzdG9wLWNvbG9yPSIjNDU0NTQ1Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuMDEzIiBzdG9wLWNvbG9yPSIjNDY0NjQ2Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODc1IiBzdG9wLWNvbG9yPSIjNjI2MjYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNmQ2ZDZkIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2Nfa3R1cTg3NkR6bUVpX2dyMykiIGQ9Ik0zMiwzOWwtMi42MjUsMi43MTYJYy0wLjIzMiwwLjE3NC0wLjM4LDAuNDQtMC4zOTcsMC43M2MtMC4wNTEsMC44MjUtMC4yMzksMi42Mi0wLjkyNCwzLjg4MWMtMC4yMTcsMC4zOTksMC4yMjcsMC44MzEsMC42MjcsMC42MTYJQzMwLjUxNSw0NS45NjIsMzMuMzA3LDQzLjE1OCwzNCwzOUgzMnoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN2Rfa3R1cTg3NkR6bUVpX2dyNCIgeDE9IjEyLjU3MiIgeDI9IjI0LjE0NyIgeTE9Ii0xNy42MDciIHkyPSI0OC4wMzgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNmOWY5ZjkiPjwvc3RvcD48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNjMmM4Y2MiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjT3R1VUFfZ2lwUEtrMk5qcDJUZm43ZF9rdHVxODc2RHptRWlfZ3I0KSIgZD0iTTMxLDEyCUMyMy4yNjYsMS4zNjUsMTAuODU3LDAuMDc3LDEuMDA1LDAuMDA0QzAuNDQ4LTAuMDAxLDAsMC40NTMsMCwxLjAxdjBjMCwwLjU0NiwwLjQzLDAuOTkyLDAuOTc1LDEuMDA0CUMzLjYxMSwyLjA3MiwxMC45NDgsMi4zNzksMTUsNGMwLDAsOSw1LDksMTFjMCw1LTcsNy03LDIxYzAsNiwwLDEwLjU5NiwwLDEwLjU5NkMxNyw0Ny4zNzIsMTcuNjI4LDQ4LDE4LjQwNCw0OAljMC4zODUsMCwwLjc1MS0wLjE1NSwxLjAxNi0wLjQzNUMyMC40OTcsNDYuNDI1LDI0LDQyLDI1LDQwaDNjMCwwLDgtMyw4LTEwQzM2LDE1LDMxLDEyLDMxLDEyeiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iT3R1VUFfZ2lwUEtrMk5qcDJUZm43ZV9rdHVxODc2RHptRWlfZ3I1IiB4MT0iNDIuMzAxIiB4Mj0iNDQuMDE2IiB5MT0iMjEuNzQyIiB5Mj0iMzEuNDY4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZjlmOWY5Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjYzJjOGNjIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2Vfa3R1cTg3NkR6bUVpX2dyNSkiIGQ9Ik00Mi41LDI1LjYxMQlDNDAuODg1LDI0LjU5NSw0MSwyMi41LDQxLDIyLjVoLTNjMS45NjEsMy45MDYsMyw5LjUsMyw5LjVjMC0wLjUsMC40OTUtMS4yODMsMi4xMjUtMS41YzEuODc1LTAuMjUsNC4wMDYtMC41MDYsNC4wNjktMC41MTkJQzQ3LjY1MywyOS44OTEsNDgsMjkuNDg2LDQ4LDI5bDAsMGMwLTAuMzg4LTAuMjE5LTAuNzM4LTAuNTctMC45MDNDNDYuMjIxLDI3LjUzLDQzLjQzNSwyNi4xOTksNDIuNSwyNS42MTF6Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJPdHVVQV9naXBQS2syTmpwMlRmbjdmX2t0dXE4NzZEem1FaV9ncjYiIHgxPSIzMC42MjIiIHgyPSIzNS40NjgiIHkxPSIxMi4wNjciIHkyPSIzOS41NDYiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiM2ZDZkNmQiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii4xMjUiIHN0b3AtY29sb3I9IiM2MjYyNjIiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii45ODciIHN0b3AtY29sb3I9IiM0NjQ2NDYiPjwvc3RvcD48c3RvcCBvZmZzZXQ9Ii45OTgiIHN0b3AtY29sb3I9IiM0NTQ1NDUiPjwvc3RvcD48L2xpbmVhckdyYWRpZW50PjxwYXRoIGZpbGw9InVybCgjT3R1VUFfZ2lwUEtrMk5qcDJUZm43Zl9rdHVxODc2RHptRWlfZ3I2KSIgZD0iTTMxLDEyYzAsMCwyLDMsMiw3cy0xLjM0Miw3LjA1NC0yLDExCWMtMSw2LTMsMTAtMywxMGgxaDMuMjVjNC4wMjUsMCw4Ljc1LTMuNSw4Ljc1LThjMC0yLDAtNi0xLjUtMTFDMzcuNjgzLDE0Ljk0MiwzMSwxMiwzMSwxMnoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN2dfa3R1cTg3NkR6bUVpX2dyNyIgeDE9IjE2LjczMiIgeDI9IjIyLjk0OSIgeTE9IjMuNjk1IiB5Mj0iMzguOTUxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlYjNiIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmJjMDJkIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2dfa3R1cTg3NkR6bUVpX2dyNykiIGQ9Ik0zMCwyNWMwLTQsMC05LTMtMTMJYy00LjMyNy01Ljc2OS0xMi04LTEyLThzNSw0LDUsMTBjMCwyLjM2Ni0zLjcyNCw1LjM2Mi01LjMwMSw5Ljk1NGMtMC41NTYtMC4xMjUtMS41NTItMC41MTktMi42OTktMS4wMTdjMCwwLDAsMC4wNjMsMCwyLjA2MwljMCwzLTEsNC41MDctMSw0LjUwN2MxLjE0LTAuNTE0LDIuMjI3LTAuOTc5LDMuMDA2LTEuMjUzQzE0LjA3LDM2LjA4LDE3LDQwLDE3LDQwYzEuMDgtMC45NzgsMi42MDItNiw0LTZjMCwwLDEsMSwzLDEJYzQuNjI1LDAsNC41LTMsNy01QzMxLDMwLDMwLDI1LjY2OSwzMCwyNXoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN2hfa3R1cTg3NkR6bUVpX2dyOCIgeDE9IjQzLjI2NyIgeDI9IjQzLjk2MSIgeTE9IjI0Ljk5IiB5Mj0iMjguOTI3IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZjZjU0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZjBiNDIxIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2hfa3R1cTg3NkR6bUVpX2dyOCkiIGQ9Ik00MywyOC41YzAsMC4yNzYsMC4yMjQsMC41LDAuNSwwLjUJYzAuMjQ3LDAsMC40NjktMC4xODEsMC40OTItMC40MjdjMC4xMzQtMS4zOTIsMC45NTEtMC42OTUsMC45NzctMS42NTljLTEuMDAyLTAuNDk0LTEuOTg0LTAuOTk4LTIuNDY5LTEuMzAzCWMtMC4xODktMC4xMTktMC4zNS0wLjI1NS0wLjQ5NC0wLjM5OEM0Mi4wMzcsMjcuMTI1LDQzLDI3LjM4Nyw0MywyOC4xMjVWMjguNXoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN2lfa3R1cTg3NkR6bUVpX2dyOSIgeDE9IjM5LjIzOSIgeDI9IjM5Ljc2MSIgeTE9IjIxLjAyMyIgeTI9IjIzLjk3NyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzRjNGM0YyI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzM0MzQzNCI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PGNpcmNsZSBjeD0iMzkuNSIgY3k9IjIyLjUiIHI9IjEuNSIgZmlsbD0idXJsKCNPdHVVQV9naXBQS2syTmpwMlRmbjdpX2t0dXE4NzZEem1FaV9ncjkpIj48L2NpcmNsZT48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN2pfa3R1cTg3NkR6bUVpX2dyMTAiIHgxPSIxNy43ODQiIHgyPSIyNC4zNjUiIHkxPSI5LjY1IiB5Mj0iNDYuOTcxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjNmQ2ZDZkIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuMTI1IiBzdG9wLWNvbG9yPSIjNjI2MjYyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuOTg3IiBzdG9wLWNvbG9yPSIjNDY0NjQ2Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuOTk4IiBzdG9wLWNvbG9yPSIjNDU0NTQ1Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2pfa3R1cTg3NkR6bUVpX2dyMTApIiBkPSJNMjEsMjhjMC02LDUtOSw1LTEzCWMwLTIuODc1LTQuMjE0LTUuOTE0LTQuMjUtNS45MzVDMjEuNjczLDkuMDIsMjEuNTkxLDksMjEuNTExLDljLTAuMzI3LDAuMDAxLTAuNjMsMC4zMzYtMC40NjQsMC43CWMwLjMzNiwwLjc0LDEuNDUzLDMuMTc1LDEuNDUzLDQuM2MwLDQtNi41LDgtNi41LDE2YzAsNSwxLDYsMSwxMGMwLDAsMCwxLDAsM3YzLjU5NkMxNyw0Ny4zNzIsMTcuNjI4LDQ4LDE4LjQwNCw0OAljMC4zODUsMCwwLjc1MS0wLjE1NSwxLjAxNi0wLjQzNUMxOS42OTIsNDcuMjc3LDIyLDQ0LDIyLDQwQzIyLDM3LDIxLDM1LDIxLDI4eiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iT3R1VUFfZ2lwUEtrMk5qcDJUZm43a19rdHVxODc2RHptRWlfZ3IxMSIgeDE9IjQ2LjM3NSIgeDI9IjQ2LjU4MSIgeTE9IjI4LjkxOCIgeTI9IjMwLjA4OSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzZkNmQ2ZCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjEyNSIgc3RvcC1jb2xvcj0iIzYyNjI2MiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjk4NyIgc3RvcC1jb2xvcj0iIzQ2NDY0NiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjk5OCIgc3RvcC1jb2xvcj0iIzQ1NDU0NSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNPdHVVQV9naXBQS2syTmpwMlRmbjdrX2t0dXE4NzZEem1FaV9ncjExKSIgZD0iTTQ1LDMwLjI1NwljMS4xODktMC4xNTEsMi4xNTItMC4yNjgsMi4xOTQtMC4yNzZDNDcuNjU0LDI5Ljg5MSw0OCwyOS40ODYsNDgsMjloLTJjLTAuNTUyLDAtMSwwLjQ0OC0xLDFWMzAuMjU3eiI+PC9wYXRoPjxwYXRoIGQ9Ik0zMSwzMC41Yy0wLjA3NywwLTAuMTUzLTAuMDE4LTAuMjI0LTAuMDUzCWMtNC4wMjYtMi4wMTMtNS4yNzYtNi4wNzItNS4yNzYtNy4zMjJjMC0xLjQ0NywxLjE3OC0yLjYyNSwyLjYyNS0yLjYyNWMyLjI4MiwwLDUuNzY1LDMuMzAyLDcuMTIyLDUuMDcJYzAuMjU2LDAuMzMzLDAuMzIzLDAuNzY4LDAuMTgsMS4xNjRjLTAuMTM5LDAuMzgtMC40NTQsMC42NTktMC44NDQsMC43NDZjLTEuMjM2LDAuMjc2LTIuNjc2LDEuMjA1LTMuMTA0LDIuNjYxCWMtMC4wNDIsMC4xNDItMC4xNDUsMC4yNTgtMC4yOCwwLjMxN0MzMS4xMzYsMzAuNDg2LDMxLjA2OCwzMC41LDMxLDMwLjV6IiBvcGFjaXR5PSIuMDciPjwvcGF0aD48cGF0aCBkPSJNMzEsMzFjLTAuMTU0LDAtMC4zMS0wLjAzNy0wLjQ0Ny0wLjEwNQlDMjYuMzE2LDI4Ljc3NiwyNSwyNC40NTgsMjUsMjMuMTI1QzI1LDIxLjQwMiwyNi40MDIsMjAsMjguMTI1LDIwYzIuNjAxLDAsNi4yNTIsMy42MTYsNy41MTksNS4yNjYJYzAuMzYsMC40NjksMC40NTUsMS4wODIsMC4yNTMsMS42MzljLTAuMTk3LDAuNTQyLTAuNjQ3LDAuOTM5LTEuMjA1LDEuMDYzYy0xLjA5MywwLjI0NC0yLjM2MiwxLjA1NC0yLjczMiwyLjMxNAljLTAuMDg0LDAuMjg1LTAuMjg4LDAuNTE3LTAuNTYxLDAuNjM1QzMxLjI3MywzMC45NzIsMzEuMTM5LDMxLDMxLDMxeiBNMzEsMzB2MC41VjMwQzMxLDMwLDMxLDMwLDMxLDMweiIgb3BhY2l0eT0iLjA1Ij48L3BhdGg+PGxpbmVhckdyYWRpZW50IGlkPSJPdHVVQV9naXBQS2syTmpwMlRmbjdsX2t0dXE4NzZEem1FaV9ncjEyIiB4MT0iMjguODI4IiB4Mj0iMzUuNjQ3IiB5MT0iMjAuODQzIiB5Mj0iNTkuNTEzIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjZmZlYjNiIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmJjMDJkIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI090dVVBX2dpcFBLazJOanAyVGZuN2xfa3R1cTg3NkR6bUVpX2dyMTIpIiBkPSJNMzMsMjZsLTAuNTA4LTIuNTg2CUMzMS4wNDMsMjIuMTM3LDI5LjM0NCwyMSwyOC4xMjUsMjFoMEMyNi45NTEsMjEsMjYsMjEuOTUxLDI2LDIzLjEyNUMyNiwyNCwyNywyOCwzMSwzMEMzMiwyNywzMywyNiwzMywyNnoiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9Ik90dVVBX2dpcFBLazJOanAyVGZuN21fa3R1cTg3NkR6bUVpX2dyMTMiIHgxPSIzMi4xNzkiIHgyPSIzNS43MTUiIHkxPSIyMy40NyIgeTI9IjQzLjUyMyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzZkNmQ2ZCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjIzNiIgc3RvcC1jb2xvcj0iIzYyNjI2MiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjk4NyIgc3RvcC1jb2xvcj0iIzQ2NDY0NiI+PC9zdG9wPjxzdG9wIG9mZnNldD0iLjk5OCIgc3RvcC1jb2xvcj0iIzQ1NDU0NSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNPdHVVQV9naXBQS2syTmpwMlRmbjdtX2t0dXE4NzZEem1FaV9ncjEzKSIgZD0iTTM0Ljg1MSwyNS44NzUJYy0wLjUyNi0wLjY4NS0xLjM4Ny0xLjYwNC0yLjM1OC0yLjQ2MWMtMC40NSwyLjE0LTEuMDk1LDQuMi0xLjQ5Miw2LjU4NmMwLjQ5Ni0xLjY4NSwyLjEyOC0yLjcwOCwzLjQ3NS0zLjAwOAlDMzQuOTY5LDI2Ljg4MiwzNS4xNTksMjYuMjc2LDM0Ljg1MSwyNS44NzV6Ij48L3BhdGg+Cjwvc3ZnPg=="
					width="48"
				>
			</picture>
			mstrow.dev
		</a>
		{#if innerWidth > 648}
			<div class="divider"></div>
			{#each items as { name, path, external, icon, type }}
				{#if type === "divider"}
					<div class="divider"></div>
				{:else}
					<a
						class="item"
						sveltekit:prefetch
						class:selected={$page.url.pathname === path ||
						($page.url.pathname.split("/").length > 1 &&
							path.split("/").length > 1 &&
							$page.url.pathname.startsWith(path) &&
								!(path === "" || path === "/")) ||
							(path === "/" && $page.url.pathname === "")}
						href={path}
						target={external ? "_blank" : undefined}
						rel={external ? "noreferrer noopener" : undefined}
					>
						{#if icon}
							{@html icon}
						{/if}
						<span>{name}</span>
					</a>
				{/if}
			{/each}
		{/if}
	</nav>
	<div class="buttons">
		{#if innerWidth > 648}
			{#each buttons as { icon, href, label }}
				<a
					class="button"
					{href}
					aria-label={label}
					title={label}
					{...externalLink}
				>{@html icon}</a>
			{/each}
		{:else}
			<button
				on:click={toggleSidebar}
				bind:this={sidebarButton}
				class="button sidebar-button"
			>
				{@html Navigation}
			</button>
		{/if}
	</div>
	<aside
		bind:this={sidebar}
		class="sidebar scroller"
		class:visible={sidebarVisible}
	>
		{#each items as { name, path, external, sidebarTree, icon, type }}
			{#if type === "divider"}
				<hr>
			{:else if !sidebarTree}
				<ListItem
					type="navigation"
					sveltekit:prefetch
					on:click={toggleSidebar}
					selected={$page.url.pathname === path ||
					($page.url.pathname.split("/").length > 1 &&
							path.split("/").length > 1 &&
							$page.url.pathname.startsWith(path) &&
							!(path === "" || path === "/")) ||
						(path === "/" && $page.url.pathname === "")}
					href={path}
					target={external ? "_blank" : undefined}
					rel={external ? "noreferrer noopener" : undefined}
				>
					<svelte:fragment slot="icon">
						{#if icon}
							{@html icon}
						{/if}
					</svelte:fragment>
					<span>{name}</span>
				</ListItem>
			{:else}
				<TreeView
					on:click={toggleSidebar}
					tree={[
						{
							type: "category",
							name,
							icon,
							pages: [...sidebarTree]
						}
					]}
				/>
			{/if}
		{/each}
		<hr>
		{#each buttons as { icon, href, label }}
			<ListItem
				{href}
				sveltekit:prefetch
				type="navigation"
				{...externalLink}
			>
				<svelte:fragment slot="icon">
					{#if icon}
						{@html icon}
					{/if}
				</svelte:fragment>
				<span>{label}</span>
			</ListItem>
		{/each}
	</aside>
</header>

<style lang="scss">
	@use "./Navbar";
</style>
