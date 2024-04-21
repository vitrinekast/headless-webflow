import { getPage } from "@/services/data";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { HeroSimpler } from "~/devlink";

export default async function Page() {
    const page = await getPage("partners");
    
    return <>
        <HeroSimpler title={page.data.title} subtitle={page.data.subtitle} body={page.data.description.text} buttonsSlot={false} />
        <SliceZone slices={page.data.slices} components={components} />;
    </>
}