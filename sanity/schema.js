import { buttonType } from "./types/blocks/buttonType"
import { ctaType } from "./types/blocks/ctaType"
import { heroType } from "./types/blocks/heroType"
import { linkType } from "./types/blocks/linkType"
import { partnerType } from "./types/blocks/partnerType"
import { slideType } from "./types/blocks/slideType"
import { sliderType } from "./types/blocks/sliderType"
import { collectionType } from "./types/collectionType"
import { locationType } from "./types/locationType"
import { pageType } from "./types/pageType"
import { partnerSection } from "./types/partnerSection"
import { plantType } from "./types/plantType"
import { siteSettings } from "./types/siteSettings"

export const schema = {
  types: [
    buttonType,
    collectionType,
    ctaType,
    heroType,
    linkType,
    locationType,
    pageType,
    partnerSection,
    partnerType,
    plantType,
    siteSettings,
    sliderType,
    slideType
  ],
}