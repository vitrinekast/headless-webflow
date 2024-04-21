import { Button, SectionContent } from "../../../devlink";

/**
 * @typedef {import("@prismicio/client").Content.ContentCtaSlice} ContentCtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentCtaSlice>} ContentCtaProps
 * @param {ContentCtaProps}
 */

const ContentCta = ({ slice }) => {
  return (
    <SectionContent
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      title={slice.primary.title}
      description={slice.primary.description}
      subtitle={slice.primary.subtitle}
      buttonGroupSlot={
        slice.items.map((button, index) => (
          <Button
            key={index}
            label={button.button_label}
            link={button.button_link.url}
          />
        ))
      }
    />
  );
};

export default ContentCta;
