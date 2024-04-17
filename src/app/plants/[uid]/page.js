import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PlantDetails } from "../../../../devlink/PlantDetails";
import { PlantGallery } from "../../../../devlink/PlantGallery";
import { PlantGalleryItem } from "../../../../devlink/PlantGalleryItem";

export default async function Page({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("plant", params.uid)
    .catch(() => notFound());

    console.log(page.data.collection);

  const collection = await client.getByUID("collectiontag", page.data.collection.uid)
  console.log(collection);
  return <>
    <PlantDetails
      subtitle={collection.data.title}
      title={page.data.title}
      description={page.data.description}
      thumbnail={page.data.thumbnail.url}
    />
    <PlantGallery
      plantGallerySlot={page.data.images.map((image, index) => {
        return <img src={image.image.url} key={index} />
        // <PrismicNextImage field={data.images.image} />

      })}
    />
    <SliceZone slices={page.data.slices} components={components} />
  </>;
}

export async function generateMetadata({ params }) {
  const client = createClient();
  const page = await client
    .getByUID("plant", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("plant");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
