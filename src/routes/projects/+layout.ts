import { projects, type DocsCategory, type DocsPage } from "$data/projects";
import type { LayoutLoad } from "./$types";

function* flatten<T>(array: T[], depth = Infinity): Generator<T> {
	for (const item of array) {
		if (Array.isArray(item) && depth > 0) {
			yield* flatten(item, depth - 1);
		} else {
			yield item;
		}
	}
}

export const findPages = (docsStructure: (DocsPage | DocsCategory)[]) => {
	return [...flatten(docsStructure)].filter(
		(page): page is DocsPage => Object.prototype.hasOwnProperty.call(page, "path")
	);
};

export const load: LayoutLoad = ({ url }) => {
	const docsPages = findPages(projects);

	return {
		pagePath: url.pathname,
		currentPage: docsPages.find(p => `/projects${ p.path }` === url.pathname),
		docsPages
	};
};
