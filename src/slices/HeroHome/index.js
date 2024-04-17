import { HeroHome } from "../../../devlink";

/**
 * @typedef {import("@prismicio/client").Content.HeroHomeSlice} HeroHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroHomeSlice>} HeroHomeProps
 * @param {HeroHomeProps}
 */
const HeroHomeSlice = ({ slice }) => {
  return (
    <HeroHome title={slice.primary.title} data-slice-type={slice.slice_type} data-slice-variation={slice.variation} />
  );
};

export default HeroHomeSlice;
