import { HeroHome, HeroSimpler } from "../../../devlink";

/**
 * @typedef {import("@prismicio/client").Content.HeroHomeSlice} HeroHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroHomeSlice>} HeroHomeProps
 * @param {HeroHomeProps}
 */
const HeroHomeSlice = ({ slice }) => {

  if (slice.variation === "simpler") {
    return <HeroSimpler title={slice.primary.title} data-slice-type={slice.slice_type} data-slice-variation={slice.variation} buttonsSlot={false} />
  } else {
    return <HeroHome title={slice.primary.title} data-slice-type={slice.slice_type} data-slice-variation={slice.variation} />
  }
};

export default HeroHomeSlice;
