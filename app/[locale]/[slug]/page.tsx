import { notFound } from "next/navigation";
import { getPage } from "@/lib/getPage";
import SectionRenderer from "@/app/components/SectionRenderer";

type Props = {
  params: {
    locale: string;
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  const { locale, slug } = await params;

  const page = await getPage(slug, locale);

  if (!page) notFound();

  const sections = Array.isArray(page.fields.sections)
    ? page.fields.sections
    : [];

  return (
    <main>
      {sections.map((section: any) => (
        <SectionRenderer key={section.sys.id} section={section} />
      ))}
    </main>
  );
}
