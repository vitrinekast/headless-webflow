import { createClient } from "@prismicio/client";
import { SectionOurCollection } from "../../../devlink";
import * as prismic from '@prismicio/client'
/**
 * @typedef {import("@prismicio/client").Content.CollectionSliderSlice} CollectionSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionSliderSlice>} CollectionSliderProps
 * @param {CollectionSliderProps}
 */
const CollectionSlider = ({ slice }) => {
  const client = createClient();

  const plantIDs = [];
  
  // console.log(slice.items);
  // slice.items.forEach((item) => {
  //   plantIDs.push(item.plant.id);
  // });
  // // const plants = await client.getAllByType('plant')
  // const plants = await client.getByIDs(plantIDs);
  // console.log(plants);

  return (

    <SectionOurCollection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      subtitle={slice.primary.subtitle}
      title={slice.primary.title}
      description={slice.primary.description}

      splideSplideListSlot={
        <>
          {slice.items.map((item, index) => {
            return <div key={index} className="splide__slide">
              <img />
            </div>
          })}
        </>
      }
    />

  );
};

export default CollectionSlider;
