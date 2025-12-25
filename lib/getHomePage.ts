import { createClient } from "contentful";

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getHomePage(locale: string) {
  const res = await client.getEntries({
    content_type: "page",
    "fields.title": "Home",
    include: 10,
    locale,
  });
  return res.items[0].fields.sections;
}
