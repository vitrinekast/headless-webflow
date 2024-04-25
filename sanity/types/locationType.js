import { defineField, defineType } from 'sanity'

export const locationType = defineType({
  name: 'location',
  title: 'location',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'location',
      type: 'geopoint'
    }),
    defineField({
      name: 'description',
      type: 'text',
    })
  ],
})