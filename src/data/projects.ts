export type DocsNode = {
	name: string,
	icon?: string,
}

export type DocsPage = DocsNode & { path: string }

export type DocsCategory = DocsNode & { pages: DocsPage[] }

export const projects: (DocsPage | DocsCategory)[] = [
	{
		name: "Overview",
		path: ""
	},
	{
		name: "Personal",
		pages: [
			{
				name: "Raytracer",
				path: "/personal/raytracer"
			},
			{
				name: "Personal website (this site)",
				path: "/personal/website"
			}
		]
	},
	{
		name: "Degree-related",
		pages: [
			{
				name: "Library Manager",
				path: "/degree/library-manager"
			},
			{
				name: "Python QT Data Analysis Tool",
				path: "/degree/pythonqtdataanalysis"
			},
			{
				name: "Lunar Lander game written in SQL",
				path: "/degree/lunarlandersql"
			}
		]
	}
];
