import TransitionLink from '@/app/components/transitionlink';
import { getCollection } from '@/services/data';
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { CardPlant, CollectionListPlants, HeroSimpler } from "~/devlink";


export default async function Page({ params }) {
    const { page, plants } = await getCollection(params.uid);
    const { title, description, slices } = page.data;

    return <>
        <HeroSimpler title={title}
            subtitle={"collection"}
            description={description.text} buttonsSlot={
                 <TransitionLink href="/" label="Back to collections" />
            } />

        <CollectionListPlants
            plantsSlot={plants.length && plants.map((plant, index) => (
                <CardPlant key={index} title={plant.data.title} image={plant.data.thumbnail.url} link={{ href: plant.url }} />
            ))}
        />

        < SliceZone slices={slices} components={components} />
    </>;
}
