"use client";

import Splide from '@splidejs/splide';
import '@splidejs/splide/css';
import { useEffect, useRef } from 'react';
import { CardPlant } from "../../../devlink";
import { SectionCollectionSlider } from '../../../devlink/SectionCollectionSlider';
/**
 * @typedef {import("@prismicio/client").Content.CollectionSliderSlice} CollectionSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionSliderSlice>} CollectionSliderProps
 * @param {CollectionSliderProps}
 */




export default async function CollectionSlider({ slice }) {
  const sliderRef = useRef(null);
  let splideEl = false;

  useEffect(() => {
    if (sliderRef.current && !splideEl) {
      splideEl = new Splide(sliderRef.current, {
        perPage: 3,
      }).mount();
    }

  }, [sliderRef])
  return (

    <SectionCollectionSlider
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      subtitle={slice.primary.subtitle}
      title={slice.primary.title}
      description={slice.primary.description}
      props={{ ref: sliderRef }}
      sliderSlot={slice.plants.map((item, index) => {
        const { title, thumbnail } = item.data;
        return <CardPlant key={index} title={title} image={thumbnail.url} />
      })}


    />

  );
};