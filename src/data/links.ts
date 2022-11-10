import type { DocsPage } from "$data/docs";

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
