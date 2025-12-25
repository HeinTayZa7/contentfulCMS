import HomeHeroBanner from "./HomeHeroBanner";
import HeroBanner from "./HeroBanner";
import AboutSection from "./AboutSection";
import AboutTitleSection from "./AboutTitleSection";
import ServicesSection from "./ServiceSection";
import PartnersSection from "./PartnersSection";
import PhotoGallery from "./PhotoGallery";
import ProcessFlowSection from "./ProcressFlowSection";
import ContactCard from "./ContactCard";
import ContactTitle from "./ContactTitle";
import Card from "./Card";

type SectionRendererProps = { section: any };

export default function SectionRenderer({ section }: SectionRendererProps) {
  if (!section?.sys?.contentType?.sys?.id) return null;

  const type = section.sys.contentType.sys.id;

  switch (type) {
    case "homeHeroBanner":
      return <HomeHeroBanner {...section.fields} />;

    case "heroBanner":
      return <HeroBanner {...section.fields} />;

    case "aboutUsSection":
      return <AboutSection {...section.fields} />;

    case "titleSection":
      return <AboutTitleSection {...section.fields} />;

    case "card":
      return <Card infos={section.fields.infos} />;

    case "servicesSection":
      return <ServicesSection {...section.fields} />;

    case "partnerSection":
      return <PartnersSection {...section.fields} />;

    case "photoGallerySection":
      return <PhotoGallery {...section.fields} />;

    case "processFlowSection":
      return <ProcessFlowSection data={section.fields} />;

    // case "contactUsSection":
    //   return <ContactTitle {...section.fields} />;

    case "contactUsSection":
      return (
        <ContactCard
          title={section.fields.title}
          details={section.fields.details}
          infos={section.fields.infos}
          subjects={section.fields.subjects}
        />
      );

    default:
      return null;
  }
}
