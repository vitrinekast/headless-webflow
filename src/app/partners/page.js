import { getClient } from "@/services/client";
import { getPage } from "@/services/queries";
import { Cta, HeroSimpler, SectionMap, SectionPartners } from "~/devlink";
import SectionsCollection from "../components/sectionsCollection";

export default async function Page({params}) {
  const { data } = await getClient().query({ query: getPage, variables: { slug: "partners" } });
  const page = data.pageCollection.items[0];
  
  return <>
    <HeroSimpler title={page.heroTitle} subtitle={page.heroSubtitle} body={page.heroDescription} buttonsSlot={false} />
    <SectionsCollection items={page.sectionsCollection.items} />
    <SectionMap subtitle={"map"} />
    <SectionPartners />
    <Cta subtitle={page.ctaSubtitle} title={page.ctaTitle} buttonLink={{ href: page.ctaLink?.slug }} />
  </>;
}