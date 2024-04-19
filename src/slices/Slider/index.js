"use client";

import * as prismicH from '@prismicio/client';
import Splide from '@splidejs/splide';
import { Slider, SlideSlider, SliderHistory, SlideSliderHistory } from "../../../devlink";
import { useEffect, useRef, useState } from 'react';
import { SlideHistorySlider } from '../../../devlink/SlideHistorySlider';

import '@splidejs/splide/css';

/**
 * @typedef {import("@prismicio/client").Content.SliderSlice} SliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<SliderSlice>} SliderProps
 * @param {SliderProps}
 */
const SliderSlice = ({ slice }) => {
  const sliderRef = useRef(null);
  let splideEl = false;
  
  useEffect(() => {
    if (sliderRef.current && !splideEl) {
      splideEl = new Splide(sliderRef.current).mount();
    }

  }, [sliderRef])
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >

      {
        slice.variation === "history" && <SliderHistory sliderProps={{ ref: sliderRef }} sliderSlot={
          slice.items.map((item, index) => (
            <SlideHistorySlider key={index} title={item.title} image={item.image.url} body={prismicH.asHTML(item.body)} button={{ href: item.link?.url }} buttonLabel={item.link_label ? item.link_label : item.link?.uid} ></SlideHistorySlider>
          ))
        }></SliderHistory>
      }

      {
        slice.variation === "default" && <Slider sliderProps={{ ref: sliderRef }} sliderSlot={
          slice.items.map((item, index) => (
            <SlideSlider key={index} title={item.title} image={item.image.url} body={prismicH.asHTML(item.body)} button={{ href: item.link?.url }} buttonLabel={item.link_label ? item.link_label : item.link?.uid} ></SlideSlider>
          ))
        }></Slider>
      }

    </section>
  );
};

export default SliderSlice;

{/* <pre>
{JSON.stringify(slice, null, 2)}
</pre> */}