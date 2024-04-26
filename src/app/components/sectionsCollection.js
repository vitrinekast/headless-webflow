import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { SectionContent, SectionSlider, SectionSliderHistory, SectionSliderHistorySlide, SectionSliderSlide } from "~/devlink";

export default function SectionsCollection({ items }) {

    return <>
        {
            items.map((section, index) => {

                switch (section.__typename) {
                    case 'Headline':
                        return <SectionContent title={section.title} subtitle={section.subtitle} description={documentToHtmlString(section.description.json)} key={index} />
                    case 'SliderCollection':
                        switch (section.theme) {
                            case "History":
                                return <SectionSliderHistory key={index} {...section} sliderSlot={
                                    section.slidesCollection.items.map((slide, index) => {
                                        return <SectionSliderHistorySlide key={index} {...slide} />
                                    })
                                } />;
                                break;
                            case "Content":
                                return <SectionSlider key={index} {...section} sliderSlot={
                                    section.slidesCollection.items.map((slide, index) => {
                                        return <SectionSliderSlide key={index} {...slide} />
                                    })
                                } />;
                                break;
                            default:
                                return <h2>unmapped sliuder for {section.theme}</h2>
                                break;
                        }

                    default:
                        return <h2>Unmapped section for {section.__typename}</h2>
                }
            })
        }
    </>
}