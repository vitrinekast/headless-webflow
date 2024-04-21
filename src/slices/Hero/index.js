import { HeroHome, HeroSimpler } from "~/devlink";

/**
 * @typedef {import("@prismicio/client").Content.HeroHomeSlice} HeroHomeSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<HeroHomeSlice>} HeroHomeProps
 * @param {HeroHomeProps}
 */
const HeroHomeSlice = ({ slice }) => {
  const { title } = slice.primary;
  
  if (slice.variation === "simpler") {
    return <HeroSimpler title={title} buttonsSlot={false} />
  } else {
    return <HeroHome title={title} />
  }
};

export default HeroHomeSlice;
