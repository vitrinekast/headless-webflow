import { gql } from '@apollo/client';
import { headlineFields, sliderFields } from './fragments';

export const getPage = gql`
  ${headlineFields}
  ${sliderFields}
  query getPage($slug: String) {
    pageCollection(limit: 1, where: { slug: $slug }) {
      items {
        title
        slug
        seoTitle
        heroTitle
        heroSubtitle
        heroDescription
        ctaTitle
        ctaImage {
          url
        }
        ctaSubtitle
              ctaLink {
          slug
        }
        sectionsCollection(limit: 10) {
          items {
            __typename
            ... on SliderCollection {
              ... sliderFields
            }
            ... on Headline {
              ... headlineFields
            }
          }
        }
      }
    }
  }
`;