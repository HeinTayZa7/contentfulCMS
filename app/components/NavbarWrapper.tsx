import NavBar from "./NavBarSection";
import { client } from "@/lib/contentful";

async function getNavPages(locale: string) {
  const res = await client.getEntries({
    content_type: "page",
    locale,
    order: ["fields.order"],
  });

  return res.items
    .filter((item: any) => item.fields.slug)
    .map((item: any) => ({
      title: item.fields.title ?? item.fields.slug,
      slug: item.fields.slug,
    }));
}

export default async function NavBarWrapper({ locale }: { locale: string }) {
  const pages = await getNavPages(locale);
  return <NavBar pages={pages} />;
}
