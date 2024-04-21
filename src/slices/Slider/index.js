"use client";

import * as prismicH from '@prismicio/client';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide-core.min.css';
import { useEffect, useRef } from 'react';
import { SectionSlider, SectionSliderHistory, SectionSliderHistorySlide, SectionSliderSlide } from '~/devlink';

const SliderSlice = ({ slice }) => {
  const sliderRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    if (progressRef.current) {
      progressRef.current.style.height = `${100 / slice.items.length}%`
    }
  }, [progressRef])


  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        wheel: false,
        drag: true,
        wheelSleep: 500,
        wheelMinThreshold: 20,
        speed: 800,
        gap: "1.5rem",
        lazyLoad: false,
        releaseWheel: true,

        pagination: false,
        autoplay: true,
        interval: 4000,
        arrows: true,
        type: "fade",
        rewind: true,
        gap: "0rem",

      }).mount().on('move', (target) => {
        const part = 100 / slice.items.length;

        if (progressRef.current) {
          progressRef.current.style.transform = `translateY(${part * target}%)`;
        }
      });
    }

  }, [sliderRef])

  if (slice.variation === "history") {
    return <SectionSliderHistory props={{ ref: sliderRef }} sliderSlot={
      slice.items.map((item, index) => (
        <SectionSliderHistorySlide key={index} title={item.title} image={item.image.url} body={prismicH.asHTML(item.body)} button={{ href: item.link?.url }} buttonLabel={item.link_label ? item.link_label : item.link?.uid} ></SectionSliderHistorySlide>
      ))
    } />
  } else {
    return <SectionSlider props={{ ref: sliderRef }} progressProps={{ ref: progressRef }} sliderSlot={
      slice.items.map((item, index) => (
        <SectionSliderSlide key={index} title={item.title} image={item.image.url} body={prismicH.asHTML(item.body)} button={{ href: item.link?.url }} buttonLabel={item.link_label ? item.link_label : item.link?.uid} ></SectionSliderSlide>
      ))
    } />
  }

};

export default SliderSlice;