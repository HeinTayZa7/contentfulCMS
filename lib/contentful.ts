import { createClient } from "contentful";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || "",
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
});

// Helpful type for Rich Text Document
export type RichTextDoc = {
  nodeType: string;
  data: any;
  content: any[];
};

export const getPage = async (title: string, locale: "en-US" | "th") => {
  const res = await client.getEntries({
    content_type: "page",
    include: 2,
    locale,
  });

  console.log(res.items);

  const page = res.items.find((item: any) => item.fields.title === title);
  return page ? page.fields : null;
};
