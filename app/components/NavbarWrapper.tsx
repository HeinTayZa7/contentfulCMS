import NavBar from "./NavBarSection";
import { client } from "@/lib/contentful";

async function getNavPages(locale: string) {
  const res = await client.getEntries({
    content_type: "page",
    locale, // pass locale for multi-language support
    order: ["fields.order"], // optional, if you want custom ordering
  });

  // Filter out entries without a slug, and map properly
  return res.items
    .filter((item: any) => item.fields.slug)
    .map((item: any) => ({
      title: item.fields.title ?? item.fields.slug, // fallback if title missing
      slug: item.fields.slug,
    }));
}

export default async function NavBarWrapper({ locale }: { locale: string }) {
  const pages = await getNavPages(locale);
  return <NavBar pages={pages} />;
}
