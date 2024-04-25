import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { SectionMap, SectionPartners } from "~/devlink";
import { Cta } from "~/devlink/Cta";

import { getClient } from "@/services/client";

import { gql } from "@apollo/client";

const query = gql`{
  allEvent(sort: [{ name: ASC }]) {
    name
  }
}
`;


export default async function Page() {
  const { data } = await getClient().query({ query });

  console.log(data);


  return <>
    {/* <SliceZone slices={page.data.slices} components={components} /> */}
    <SectionMap />
    <SectionPartners />
    <Cta />
  </>;
}