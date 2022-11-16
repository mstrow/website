import type { DocsPage } from "$data/projects";

export const links = {
	github: {
		owner: "mstrow"
	}
};

export type NavbarItem = {
	name: string;
	path: string;
	external?: boolean;
	icon: any;
	type?: string;
	sidebarTree?: DocsPage[];
};
