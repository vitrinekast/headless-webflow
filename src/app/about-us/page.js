import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { SectionMap, SectionPartners } from "~/devlink";
import { Cta } from "~/devlink/Cta";

const client = createClient();

export async function generateMetadata() {

    const client = createClient();
    const page = await client.getByUID("page", "about-us");


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

async function getData() {

    // return await client.getByUID("page", "about-us").catch(() => notFound());

    return await client.getByUID("page", "about-us", {
        graphQuery: `
          {
            page {
              slices {
                ...on slider {
                  variation {
                    ...on default {
                      primary {
                        ...primaryFields
                      }
                      items {
                        ...itemsFields
                      }
                    }
                  }
                }
              }
            }
          }
        `
    })

}


export default async function Page() {
    const page = await getData();
    
    return <>
        <SliceZone slices={page.data.slices} components={components} />
        <SectionMap />
        <SectionPartners />
        <Cta />
    </>;
}