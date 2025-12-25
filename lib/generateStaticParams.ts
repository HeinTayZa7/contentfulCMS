import { client } from "@/lib/contentful";

export async function generateStaticParams() {
  const res = await client.getEntries({
    content_type: "page",
    select: ["fields.slug"],
  });

  console.log("pages for static params:", res.items.length);

  return res.items.flatMap((item: any) =>
    ["en-US", "th-TH"].map((locale) => ({
      locale,
      slug: item.fields.slug,
    }))
  );
}
