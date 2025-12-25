import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});
export async function getPage(slug: string, locale: string) {
  const res = await client.getEntries({
    content_type: "page",
    locale,
    include: 10,
  });

  return (
    res.items.find(
      (item: any) => item.fields.slug?.toLowerCase() === slug.toLowerCase()
    ) ?? null
  );
}
