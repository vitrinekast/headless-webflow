// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

type CollectionDocumentDataSlicesSlice = never;

/**
 * Content for Collection documents
 */
interface CollectionDocumentData {
  /**
   * title field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *Collection*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Slice Zone field in *Collection*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<CollectionDocumentDataSlicesSlice> /**
   * Meta Description field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: collection.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Collection*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: collection.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Collection*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: collection.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Collection document from Prismic
 *
 * - **API ID**: `collection`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type CollectionDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<CollectionDocumentData>,
    "collection",
    Lang
  >;

/**
 * Item in *footer → links*
 */
export interface FooterDocumentDataLinksItem {
  /**
   * link field in *footer → links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *footer → links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Item in *footer → legal links*
 */
export interface FooterDocumentDataLegalLinksItem {
  /**
   * link field in *footer → legal links*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.legal_links[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * label field in *footer → legal links*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.legal_links[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for footer documents
 */
interface FooterDocumentData {
  /**
   * links field in *footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  links: prismic.GroupField<Simplify<FooterDocumentDataLinksItem>>;

  /**
   * legal links field in *footer*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.legal_links[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  legal_links: prismic.GroupField<Simplify<FooterDocumentDataLegalLinksItem>>;

  /**
   * body field in *footer*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.body
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  body: prismic.RichTextField;
}

/**
 * footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

type HomeDocumentDataSlicesSlice =
  | ContentCtaSlice
  | HeroHomeSlice
  | CollectionSliderSlice;

/**
 * Content for Home documents
 */
interface HomeDocumentData {
  /**
   * title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: home.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Home*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: home.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomeDocumentDataSlicesSlice> /**
   * Meta Description field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: home.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Home*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: home.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Home*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: home.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Home document from Prismic
 *
 * - **API ID**: `home`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomeDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<Simplify<HomeDocumentData>, "home", Lang>;

/**
 * Item in *Main Navigation → Menu items*
 */
export interface MainNavigationDocumentDataMenuItemsItem {
  /**
   * Link field in *Main Navigation → Menu items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.menu_items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * Label field in *Main Navigation → Menu items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.menu_items[].label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  label: prismic.KeyTextField;
}

/**
 * Content for Main Navigation documents
 */
interface MainNavigationDocumentData {
  /**
   * Menu items field in *Main Navigation*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: main_navigation.menu_items[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu_items: prismic.GroupField<
    Simplify<MainNavigationDocumentDataMenuItemsItem>
  >;
}

/**
 * Main Navigation document from Prismic
 *
 * - **API ID**: `main_navigation`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type MainNavigationDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<MainNavigationDocumentData>,
    "main_navigation",
    Lang
  >;

type PageDocumentDataSlicesSlice = CollectionSliderSlice | ContentCtaSlice;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *Page*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: page.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Item in *plant → images*
 */
export interface PlantDocumentDataImagesItem {
  /**
   * image field in *plant → images*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.images[].image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

type PlantDocumentDataSlicesSlice = never;

/**
 * Content for plant documents
 */
interface PlantDocumentData {
  /**
   * title field in *plant*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * description field in *plant*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;

  /**
   * collection field in *plant*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.collection
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  collection: prismic.ContentRelationshipField<"collection">;

  /**
   * Color field in *plant*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.color
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  color: prismic.SelectField<"red" | "blue" | "green">;

  /**
   * weeks available field in *plant*
   *
   * - **Field Type**: Select
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.weeks_available
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#select
   */
  weeks_available: prismic.SelectField<"1" | "2">;

  /**
   * thumbnail field in *plant*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.thumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  thumbnail: prismic.ImageField<never>;

  /**
   * images field in *plant*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.images[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  images: prismic.GroupField<Simplify<PlantDocumentDataImagesItem>>;

  /**
   * Slice Zone field in *plant*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PlantDocumentDataSlicesSlice> /**
   * Meta Description field in *plant*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: plant.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_description: prismic.KeyTextField;

  /**
   * Meta Image field in *plant*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: plant.meta_image
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  meta_image: prismic.ImageField<never>;

  /**
   * Meta Title field in *plant*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: plant.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_title: prismic.KeyTextField;
}

/**
 * plant document from Prismic
 *
 * - **API ID**: `plant`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PlantDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PlantDocumentData>, "plant", Lang>;

export type AllDocumentTypes =
  | CollectionDocument
  | FooterDocument
  | HomeDocument
  | MainNavigationDocument
  | PageDocument
  | PlantDocument;

/**
 * Primary content in *CollectionSlider → Primary*
 */
export interface CollectionSliderSliceDefaultPrimary {
  /**
   * Subtitle field in *CollectionSlider → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection_slider.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * title field in *CollectionSlider → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection_slider.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *CollectionSlider → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: collection_slider.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *CollectionSlider → Items*
 */
export interface CollectionSliderSliceDefaultItem {
  /**
   * plant field in *CollectionSlider → Items*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: collection_slider.items[].plant
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  plant: prismic.ContentRelationshipField<"plant">;
}

/**
 * Default variation for CollectionSlider Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CollectionSliderSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<CollectionSliderSliceDefaultPrimary>,
  Simplify<CollectionSliderSliceDefaultItem>
>;

/**
 * Slice variation for *CollectionSlider*
 */
type CollectionSliderSliceVariation = CollectionSliderSliceDefault;

/**
 * CollectionSlider Shared Slice
 *
 * - **API ID**: `collection_slider`
 * - **Description**: CollectionSlider
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type CollectionSliderSlice = prismic.SharedSlice<
  "collection_slider",
  CollectionSliderSliceVariation
>;

/**
 * Primary content in *ContentCta → Primary*
 */
export interface ContentCtaSliceDefaultPrimary {
  /**
   * Title field in *ContentCta → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_cta.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Subtitle field in *ContentCta → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_cta.primary.subtitle
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subtitle: prismic.KeyTextField;

  /**
   * Description field in *ContentCta → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_cta.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *ContentCta → Items*
 */
export interface ContentCtaSliceDefaultItem {
  /**
   * Button Link field in *ContentCta → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: content_cta.items[].button_link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  button_link: prismic.LinkField;

  /**
   * Button Label field in *ContentCta → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: content_cta.items[].button_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  button_label: prismic.KeyTextField;

  /**
   * Button is secondary field in *ContentCta → Items*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: false
   * - **API ID Path**: content_cta.items[].button_is_secondary
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  button_is_secondary: prismic.BooleanField;
}

/**
 * Default variation for ContentCta Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentCtaSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContentCtaSliceDefaultPrimary>,
  Simplify<ContentCtaSliceDefaultItem>
>;

/**
 * Slice variation for *ContentCta*
 */
type ContentCtaSliceVariation = ContentCtaSliceDefault;

/**
 * ContentCta Shared Slice
 *
 * - **API ID**: `content_cta`
 * - **Description**: ContentCta
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContentCtaSlice = prismic.SharedSlice<
  "content_cta",
  ContentCtaSliceVariation
>;

/**
 * Primary content in *HeroHome → Primary*
 */
export interface HeroHomeSliceDefaultPrimary {
  /**
   * Title field in *HeroHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.title
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *HeroHome → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.primary.description
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  description: prismic.KeyTextField;
}

/**
 * Primary content in *HeroHome → Items*
 */
export interface HeroHomeSliceDefaultItem {
  /**
   * Link field in *HeroHome → Items*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.items[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;

  /**
   * First Label field in *HeroHome → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.items[].first_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  first_label: prismic.KeyTextField;

  /**
   * Second Label field in *HeroHome → Items*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: hero_home.items[].second_label
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  second_label: prismic.KeyTextField;
}

/**
 * Default variation for HeroHome Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHomeSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<HeroHomeSliceDefaultPrimary>,
  Simplify<HeroHomeSliceDefaultItem>
>;

/**
 * Slice variation for *HeroHome*
 */
type HeroHomeSliceVariation = HeroHomeSliceDefault;

/**
 * HeroHome Shared Slice
 *
 * - **API ID**: `hero_home`
 * - **Description**: HeroHome
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type HeroHomeSlice = prismic.SharedSlice<
  "hero_home",
  HeroHomeSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      CollectionDocument,
      CollectionDocumentData,
      CollectionDocumentDataSlicesSlice,
      FooterDocument,
      FooterDocumentData,
      FooterDocumentDataLinksItem,
      FooterDocumentDataLegalLinksItem,
      HomeDocument,
      HomeDocumentData,
      HomeDocumentDataSlicesSlice,
      MainNavigationDocument,
      MainNavigationDocumentData,
      MainNavigationDocumentDataMenuItemsItem,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      PlantDocument,
      PlantDocumentData,
      PlantDocumentDataImagesItem,
      PlantDocumentDataSlicesSlice,
      AllDocumentTypes,
      CollectionSliderSlice,
      CollectionSliderSliceDefaultPrimary,
      CollectionSliderSliceDefaultItem,
      CollectionSliderSliceVariation,
      CollectionSliderSliceDefault,
      ContentCtaSlice,
      ContentCtaSliceDefaultPrimary,
      ContentCtaSliceDefaultItem,
      ContentCtaSliceVariation,
      ContentCtaSliceDefault,
      HeroHomeSlice,
      HeroHomeSliceDefaultPrimary,
      HeroHomeSliceDefaultItem,
      HeroHomeSliceVariation,
      HeroHomeSliceDefault,
    };
  }
}
