import { createClient } from "@/prismicio";
import * as prismic from '@prismicio/client';
import { notFound } from "next/navigation";

const client = createClient();

export async function getPlant(uid) {

}

export async function getCollection(uid) {
    const page = await client.getByUID("collection", uid).catch(() => notFound());
    const plants = await getPlants(page.id);

    return {
        page,
        plants
    }

}

export async function getPlants(collectionid) {
    console.log("getplants with collectionid: ", collectionid)
    return await client.getAllByType("plant", {
        filters: [prismic.filter.at(
            'my.plant.collection',
            collectionid
        )]
    })
}

export async function getHomepage() {
    const page = await client.getSingle("home", {
        fetchLinks: ["slices.items"],
    });
    for (const slice of page.data.slices.filter((slice) => slice.slice_type === "collection_slider")) {
        slice.plants = await client.getAllByType("plant", {
            filters: [prismic.filter.at(
                'my.plant.collection',
                slice.primary.collection.id
            )]
        });
    }
    return page;
}

export async function getPage(name) {
    const page = await client.getByUID("page", name).catch(() => notFound());
    return page;
}