import { Button, SectionContent } from "~/devlink";

/**
 * @typedef {import("@prismicio/client").Content.ContentCtaSlice} ContentCtaSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ContentCtaSlice>} ContentCtaProps
 * @param {ContentCtaProps}
 */

const ContentCta = ({ slice }) => {
  const { title, description, subtitle } = slice.primary;
  return (
    <SectionContent
      title={title}
      description={description}
      subtitle={subtitle}
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
