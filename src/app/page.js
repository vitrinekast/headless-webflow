"use client";

import Image from "next/image";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { Navbar, NavbarLink } from "../../devlink";
import "../../devlink/global.css";

export default async function Home() {
  const client = createClient();

  const menu = await client.getSingle("main_navigation");
  const home = await client.getSingle("home");

  const plants = await client.getAllByType('plant')

  return (
    <>
     
      <main>

        <SliceZone slices={home.data.slices} components={components} />
      </main>
    </>
  );
}
