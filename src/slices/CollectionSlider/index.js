"use client";

import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useEffect, useRef } from 'react';
import { CardPlant, SectionCollectionSlider } from "~/devlink";

import '@splidejs/splide/dist/css/splide-core.min.css';

export default function CollectionSlider({ slice }) {
  const sliderRef = useRef(null);
  const { title, description, subtitle } = slice.primary;

  useEffect(() => {
    if (sliderRef.current) {
      new Splide(sliderRef.current, {
        fixedWidth: "400px",
        gap: "1.5rem",
        arrows: false,
        lazyLoad: "nearby",
        type: "loop",
        drag: "free",
        start: 3,
        snap: true,
        wheel: false,
        breakpoints: {
          767: {
            fixedWidth: "80vw",
            focus: "center",
          },
        },
        focus: 0,
        autoScroll: {
          pauseOnHover: false,
          speed: 0.5,
        },
      }).mount({ AutoScroll });
    }

  }, [sliderRef])
  return (

    <SectionCollectionSlider
      subtitle={subtitle}
      title={title}
      description={description}
      props={{ ref: sliderRef }}
      sliderSlot={slice.plants.map((item, index) => (
        <CardPlant key={index} title={item.data.title} image={item.data.thumbnail.url} />
      ))}
    />

  );
};