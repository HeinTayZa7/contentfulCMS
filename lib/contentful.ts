import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

export type RichTextDoc = {
  nodeType: string;
  data: any;
  content: any[];
};

export const resolveEntries = (links: unknown, includes: unknown): any[] => {
  if (!Array.isArray(links)) return [];
  if (!Array.isArray(includes)) return [];

  return links
    .map((link: any) => {
      if (
        !link?.sys ||
        link.sys.type !== "Link" ||
        link.sys.linkType !== "Entry" ||
        typeof link.sys.id !== "string"
      ) {
        return null;
      }

      const resolved = includes.find(
        (entry: any) =>
          entry?.sys?.type === "Entry" && entry.sys.id === link.sys.id
      );

      if (!resolved) return null;

      return resolved;
    })
    .filter(Boolean);
};

export async function getNavbarPages(locale: string) {
  const res = await client.getEntries({
    content_type: "page",
    "fields.showInNav": true,
    order: ["fields.navOrder"],
    locale,
  });

  return res.items.map((item: any) => ({
    title: item.fields.title,
    slug: item.fields.slug,
  }));
}

export const getPage = async (title: string, locale: "en-US" | "th") => {
  const res = await client.getEntries({
    content_type: "page",
    "fields.title": title,
    include: 5,
    locale,
    limit: 1,
  });

  const page = res.items[0];
  if (!page) return null;

  return {
    fields: page.fields,
    sections: resolveEntries(page.fields.sections, res.includes?.Entry ?? []),
    assets: res.includes?.Asset ?? [],
  };
};

export const getServicesPage = async (locale: "en-US" | "th") => {
  return getPage("Our Services", locale);
};
