declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	export { z } from 'astro/zod';

	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	// This needs to be in sync with ImageMetadata
	export type ImageFunction = () => import('astro/zod').ZodObject<{
		src: import('astro/zod').ZodString;
		width: import('astro/zod').ZodNumber;
		height: import('astro/zod').ZodNumber;
		format: import('astro/zod').ZodUnion<
			[
				import('astro/zod').ZodLiteral<'png'>,
				import('astro/zod').ZodLiteral<'jpg'>,
				import('astro/zod').ZodLiteral<'jpeg'>,
				import('astro/zod').ZodLiteral<'tiff'>,
				import('astro/zod').ZodLiteral<'webp'>,
				import('astro/zod').ZodLiteral<'gif'>,
				import('astro/zod').ZodLiteral<'svg'>,
				import('astro/zod').ZodLiteral<'avif'>,
			]
		>;
	}>;

	type BaseSchemaWithoutEffects =
		| import('astro/zod').AnyZodObject
		| import('astro/zod').ZodUnion<[BaseSchemaWithoutEffects, ...BaseSchemaWithoutEffects[]]>
		| import('astro/zod').ZodDiscriminatedUnion<string, import('astro/zod').AnyZodObject[]>
		| import('astro/zod').ZodIntersection<BaseSchemaWithoutEffects, BaseSchemaWithoutEffects>;

	type BaseSchema =
		| BaseSchemaWithoutEffects
		| import('astro/zod').ZodEffects<BaseSchemaWithoutEffects>;

	export type SchemaContext = { image: ImageFunction };

	type DataCollectionConfig<S extends BaseSchema> = {
		type: 'data';
		schema?: S | ((context: SchemaContext) => S);
	};

	type ContentCollectionConfig<S extends BaseSchema> = {
		type?: 'content';
		schema?: S | ((context: SchemaContext) => S);
	};

	type CollectionConfig<S> = ContentCollectionConfig<S> | DataCollectionConfig<S>;

	export function defineCollection<S extends BaseSchema>(
		input: CollectionConfig<S>
	): CollectionConfig<S>;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
			  }
			: {
					collection: C;
					id: keyof DataEntryMap[C];
			  }
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"add-class-metabox.mdx": {
	id: "add-class-metabox.mdx";
  slug: "add-class-metabox";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"add-jquery-ui-datepicker-plugin.mdx": {
	id: "add-jquery-ui-datepicker-plugin.mdx";
  slug: "add-jquery-ui-datepicker-plugin";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"add-select-menu-formidable-forms-customizer.mdx": {
	id: "add-select-menu-formidable-forms-customizer.mdx";
  slug: "add-select-menu-formidable-forms-customizer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"adding-custom-class-submit-button.mdx": {
	id: "adding-custom-class-submit-button.mdx";
  slug: "adding-custom-class-submit-button";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"artistdatapress-expiration.mdx": {
	id: "artistdatapress-expiration.mdx";
  slug: "artistdatapress-expiration";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"avoiding-get_theme_mod-errors.mdx": {
	id: "avoiding-get_theme_mod-errors.mdx";
  slug: "avoiding-get_theme_mod-errors";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"building-your-first-widget.mdx": {
	id: "building-your-first-widget.mdx";
  slug: "building-your-first-widget";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"change-mail-sound-office-2011-mac.mdx": {
	id: "change-mail-sound-office-2011-mac.mdx";
  slug: "change-mail-sound-office-2011-mac";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"child-themes-woothemes.mdx": {
	id: "child-themes-woothemes.mdx";
  slug: "child-themes-woothemes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"class-based-react-components.mdx": {
	id: "class-based-react-components.mdx";
  slug: "class-based-react-components";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"code-and-pre-styling.mdx": {
	id: "code-and-pre-styling.mdx";
  slug: "code-and-pre-styling";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"creating-a-baseline-for-parker.mdx": {
	id: "creating-a-baseline-for-parker.mdx";
  slug: "creating-a-baseline-for-parker";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"deploying-a-react-app-to-netlify.mdx": {
	id: "deploying-a-react-app-to-netlify.mdx";
  slug: "deploying-a-react-app-to-netlify";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"developer-interviews.mdx": {
	id: "developer-interviews.mdx";
  slug: "developer-interviews";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"editing-the-readme.mdx": {
	id: "editing-the-readme.mdx";
  slug: "editing-the-readme";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"editor-links-for-headless-wordpress-themes.mdx": {
	id: "editor-links-for-headless-wordpress-themes.mdx";
  slug: "editor-links-for-headless-wordpress-themes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"find-user-id-user-metadata.mdx": {
	id: "find-user-id-user-metadata.mdx";
  slug: "find-user-id-user-metadata";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"guide-using-wordpress-plugin-boilerplate.mdx": {
	id: "guide-using-wordpress-plugin-boilerplate.mdx";
  slug: "guide-using-wordpress-plugin-boilerplate";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"headless-theme-for-wordpress.mdx": {
	id: "headless-theme-for-wordpress.mdx";
  slug: "headless-theme-for-wordpress";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"headless-wordpress-create-react-app.mdx": {
	id: "headless-wordpress-create-react-app.mdx";
  slug: "headless-wordpress-create-react-app";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-build-react-components.mdx": {
	id: "how-to-build-react-components.mdx";
  slug: "how-to-build-react-components";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-change-the-featured-image-labels.mdx": {
	id: "how-to-change-the-featured-image-labels.mdx";
  slug: "how-to-change-the-featured-image-labels";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-link-to-the-customizer.mdx": {
	id: "how-to-link-to-the-customizer.mdx";
  slug: "how-to-link-to-the-customizer";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-pass-variables-with-get_template_part.mdx": {
	id: "how-to-pass-variables-with-get_template_part.mdx";
  slug: "how-to-pass-variables-with-get_template_part";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"how-to-write-comments-in-javascript-typescript-and-react.mdx": {
	id: "how-to-write-comments-in-javascript-typescript-and-react.mdx";
  slug: "how-to-write-comments-in-javascript-typescript-and-react";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"improving-underscores-stylesheet-using-parker.mdx": {
	id: "improving-underscores-stylesheet-using-parker.mdx";
  slug: "improving-underscores-stylesheet-using-parker";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"inline-svg-sane-way.mdx": {
	id: "inline-svg-sane-way.mdx";
  slug: "inline-svg-sane-way";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"installing-parker.mdx": {
	id: "installing-parker.mdx";
  slug: "installing-parker";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"new-react-app-with-vite.mdx": {
	id: "new-react-app-with-vite.mdx";
  slug: "new-react-app-with-vite";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"parker-and-wordpress-theme-development.mdx": {
	id: "parker-and-wordpress-theme-development.mdx";
  slug: "parker-and-wordpress-theme-development";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"parker-wordpress-menus.mdx": {
	id: "parker-wordpress-menus.mdx";
  slug: "parker-wordpress-menus";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"phpunit-tests-wp-cli.mdx": {
	id: "phpunit-tests-wp-cli.mdx";
  slug: "phpunit-tests-wp-cli";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"refactoring-code-for-better-understability.mdx": {
	id: "refactoring-code-for-better-understability.mdx";
  slug: "refactoring-code-for-better-understability";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"results-underscores-stylesheet.mdx": {
	id: "results-underscores-stylesheet.mdx";
  slug: "results-underscores-stylesheet";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"resumes-and-cover-letters.mdx": {
	id: "resumes-and-cover-letters.mdx";
  slug: "resumes-and-cover-letters";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"returning-submit-button.mdx": {
	id: "returning-submit-button.mdx";
  slug: "returning-submit-button";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"set-dashboard-column.mdx": {
	id: "set-dashboard-column.mdx";
  slug: "set-dashboard-column";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"should-you-comment-code-or-not.mdx": {
	id: "should-you-comment-code-or-not.mdx";
  slug: "should-you-comment-code-or-not";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"simplemap-shortcode-reference.mdx": {
	id: "simplemap-shortcode-reference.mdx";
  slug: "simplemap-shortcode-reference";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"simplifying-wordpress-menu-styling.mdx": {
	id: "simplifying-wordpress-menu-styling.mdx";
  slug: "simplifying-wordpress-menu-styling";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"six-steps-secure-your-wordpress-site.mdx": {
	id: "six-steps-secure-your-wordpress-site.mdx";
  slug: "six-steps-secure-your-wordpress-site";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"ten-common-html-mistakes.mdx": {
	id: "ten-common-html-mistakes.mdx";
  slug: "ten-common-html-mistakes";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"the-structure-of-the-wordpress-plugin-boilerplate.mdx": {
	id: "the-structure-of-the-wordpress-plugin-boilerplate.mdx";
  slug: "the-structure-of-the-wordpress-plugin-boilerplate";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"troubleshooting-wordpress-ajax.mdx": {
	id: "troubleshooting-wordpress-ajax.mdx";
  slug: "troubleshooting-wordpress-ajax";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"understanding-loader-class.mdx": {
	id: "understanding-loader-class.mdx";
  slug: "understanding-loader-class";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"using-plugin-generator.mdx": {
	id: "using-plugin-generator.mdx";
  slug: "using-plugin-generator";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"using-wordpress-plugin-boilerplate.mdx": {
	id: "using-wordpress-plugin-boilerplate.mdx";
  slug: "using-wordpress-plugin-boilerplate";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"web-developer-job.mdx": {
	id: "web-developer-job.mdx";
  slug: "web-developer-job";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"what-is-react.mdx": {
	id: "what-is-react.mdx";
  slug: "what-is-react";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"why-use-the-boilerplate.mdx": {
	id: "why-use-the-boilerplate.mdx";
  slug: "why-use-the-boilerplate";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"wordcamp-dayton-2015.mdx": {
	id: "wordcamp-dayton-2015.mdx";
  slug: "wordcamp-dayton-2015";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"wordcamp-nashville-2013.mdx": {
	id: "wordcamp-nashville-2013.mdx";
  slug: "wordcamp-nashville-2013";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"write-comments-in-css.mdx": {
	id: "write-comments-in-css.mdx";
  slug: "write-comments-in-css";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
"write-comments-in-html.mdx": {
	id: "write-comments-in-html.mdx";
  slug: "write-comments-in-html";
  body: string;
  collection: "blog";
  data: InferEntrySchema<"blog">
} & { render(): Render[".mdx"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	type ContentConfig = typeof import("../src/content/config");
}
