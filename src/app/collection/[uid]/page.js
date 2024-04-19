import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import * as prismic from '@prismicio/client'


import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { CollectionDetails } from "../../../../devlink/CollectionDetails";
import { CollectionListPlants } from "../../../../devlink/CollectionListPlants";
import { CardPlant } from "../../../../devlink";

export default async function Page({ params }) {
    const client = createClient();




    const page = await client.getByUID("collection", params.uid, {
        graphQuery: `{
            collection {
                title
                description
            }
    }`
    }).catch(() => notFound());

    const plants = await client.getAllByType("plant", {
        filters: [prismic.filter.at(
            'my.plant.collection',
            page.id
        )]
    })
        .catch(() => notFound());
    


    return <>
        <CollectionDetails
            title={page.data.title}
            subtitle={"collection"}
            description={page.data.description.text}
        />

        <CollectionListPlants
            collectionListPlantsSlot={
                <>
                    {plants.length && plants.map((plant, index) => {
                        return <CardPlant key={index} title={plant.data.title} image={plant.data.thumbnail.url} link={{ href: plant.url }} />
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
