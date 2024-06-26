import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";


export async function generateMetadata() {

    const client = createClient();
    const page = await client.getByUID("page", "retailers");


    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
        openGraph: {
            title: page.data.meta_title,
            images: [
                {
                    url: page.data.meta_image.url,
                },
            ],
        },
    };
}


export default async function Page() {
    const client = createClient();
    const page = await client.getByUID("page", "retailers").catch(() => notFound());
    

    return <SliceZone slices={page.data.slices} components={components} />;
}