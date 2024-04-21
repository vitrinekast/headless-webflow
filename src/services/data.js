import { createClient } from "@/prismicio";
import * as prismic from '@prismicio/client';

const client = createClient();

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

