import HeroBanner from "../components/HeroBanner";
import AboutSection from "../components/AboutSection";
import PhotoGallery from "../components/PhotoGallery";
import ProcressFlowSection from "../components/ProcressFlowSection";
import ServicesSection from "../components/ServiceSection";
import PartnersSection from "../components/PartnersSection";
import { getPage } from "@/lib/contentful";

type HeroBannerFields = {
  title: string | { nodeType: string; content?: any[] };
  image?: any;
};

type AboutFields = {
  title: string;
  details?: string;
  info?: { fields: { title: string; icon?: string } }[];
};

type PhotoGalleryFields = {
  title: string;
  images?: { fields: { file: { url: string } } }[];
};

type ProcessFlowFields = {
  title: string;
  details?: string;
  info?: { fields: { step?: string; title?: string; description?: string } }[];
};

type ServicesFields = {
  title: string;
  details?: string;
  info?: {
    fields: {
      entryTitle?: string;
      title?: string;
      description?: string;
      image?: { fields: { file: { url: string } } };
    };
  }[];
};

type PartnersFields = {
  title: string;
  details?: string;
  info?: {
    fields: {
      entryTitle?: string;
      image?: { fields: { file: { url: string } } };
    };
  }[];
};

function extractSection(page: any, entryTitle: string) {
  if (!page?.sections) return null;
  const section = page.sections.find(
    (s: any) => s.fields.entryTitle === entryTitle
  );
  return section ? section.fields : null;
}

export default async function Home({ params }: { params: { locale: string } }) {
  const { locale } = await params;
  const page = await getPage("Home", locale);

  if (!page) {
    return <main className="text-center py-20">No Home page found.</main>;
  }

  const heroSection = extractSection(page, "hero banner") as HeroBannerFields;
  const aboutSection = extractSection(page, "about section") as AboutFields;
  const photoGallerySection = extractSection(
    page,
    "photo gallery section"
  ) as PhotoGalleryFields;
  const processFlowSection = extractSection(
    page,
    "process flow section"
  ) as ProcessFlowFields;
  const servicesSection = extractSection(
    page,
    "services section"
  ) as ServicesFields;
  const partnersSection = extractSection(
    page,
    "partners section"
  ) as PartnersFields;

  const aboutData = aboutSection && {
    title: aboutSection.title || "",
    details: aboutSection.details || "",
    infos:
      aboutSection.info?.map((item) => ({
        title: item.fields.title || "",
        icon: item.fields.icon || "",
      })) || [],
  };
  const photoGalleryData = photoGallerySection && {
    title: photoGallerySection.title || "",
    images:
      photoGallerySection.images?.map(
        (img) => `https:${img.fields.file.url}`
      ) || [],
  };

  const processFlowData = processFlowSection && {
    title:
      processFlowSection.title ||
      processFlowSection?.entryTitle ||
      "Process Flow",
    details: processFlowSection.details || "",
    info:
      processFlowSection.info?.map((item) => ({
        step: item.fields.step || "",
        title: item.fields.title || "",
        description: item.fields.description || "",
      })) || [],
  };

  const servicesData = servicesSection && {
    title: servicesSection.title || "",
    details: servicesSection.details || "",
    info:
      servicesSection.info?.map((item) => ({
        entryTitle: item.fields.entryTitle || "",
        title: item.fields.title || "",
        description: item.fields.description || "",
        image: item.fields.image
          ? `https:${item.fields.image.fields.file.url}`
          : "",
      })) || [],
  };

  const partnersData = partnersSection && {
    title: partnersSection.title || "",
    details: partnersSection.details || "",
    info:
      partnersSection.info?.map((item) => ({
        entryTitle: item.fields.entryTitle || "",
        image: item.fields.image
          ? `https:${item.fields.image.fields.file.url}`
          : "",
      })) || [],
  };

  return (
    <main>
      {heroSection && (
        <HeroBanner
          title={heroSection.title}
          image={`https:${heroSection.image?.fields?.file?.url}`}
        />
      )}

      {aboutData && (
        <AboutSection
          title={aboutData.title}
          details={aboutData.details}
          infos={aboutData.infos}
        />
      )}

      {photoGalleryData && (
        <PhotoGallery
          title={photoGalleryData.title}
          images={photoGalleryData.images}
        />
      )}

      {processFlowData && (
        <ProcressFlowSection
          title={processFlowData.title}
          details={processFlowData.details}
          info={processFlowData.info}
        />
      )}

      {servicesData && (
        <ServicesSection
          title={servicesData.title}
          details={servicesData.details}
          info={servicesData.info}
        />
      )}

      {partnersData && (
        <PartnersSection
          title={partnersData.title}
          details={partnersData.details}
          info={partnersData.info}
        />
      )}
    </main>
  );
}
