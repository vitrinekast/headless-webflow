import { SectionOurCollection } from "../../../devlink";

/**
 * @typedef {import("@prismicio/client").Content.CollectionSliderSlice} CollectionSliderSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<CollectionSliderSlice>} CollectionSliderProps
 * @param {CollectionSliderProps}
 */
const CollectionSlider = ({ slice }) => {
  return (

    <SectionOurCollection
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      subtitle={slice.primary.subtitle}
      title={slice.primary.title}
      description={slice.primary.description}
    />

  );
};

export default CollectionSlider;
