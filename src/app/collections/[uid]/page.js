import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { CollectionDetails } from "../../../../devlink/CollectionDetails";
import { CollectionListPlants } from "../../../../devlink/CollectionListPlants";
import { CardPlant } from "../../../../devlink";

export default async function Page({ params }) {
    const client = createClient();
    const page = await client
        .getByUID("collection", params.uid, {
            fetchLinks: "plants.thumbnail",
        })
        .catch(() => notFound());
    
    const plants = await client
        .getAllByIDs(page.data.plants.map((plant) => plant.plant.id))
        .catch(() => notFound());
    
    return <>
        <CollectionDetails
            title={page.data.title}
            subtitle={"collection"}
            description={page.data.description}
        />
        <CollectionListPlants
            gridPlantsSlot={
                <>
                    {plants.map((plant, index) => {
                        return <CardPlant key={index} title={plant.data.title} thumbnail={plant.data.thumbnail.url} key={index} />
                    })}
                </>
            }
        />
        < SliceZone slices={page.data.slices} components={components} />
    </>;
}

export async function generateMetadata({ params }) {
    const client = createClient();
    const page = await client
        .getByUID("collection", params.uid)
        .catch(() => notFound());

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
    };
}

export async function generateStaticParams() {
    const client = createClient();
    const pages = await client.getAllByType("collection");

    return pages.map((page) => {
        return { uid: page.uid };
    });
}
