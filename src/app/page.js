"use client";

import { getHomepage } from "@/services/data";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import "../../devlink/global.css";


export default async function Home() {
  const home = await getHomepage();

  return (
    <>

      <main>
        <SliceZone slices={home.data.slices} components={components} />
      </main>
    </>
  );
}
