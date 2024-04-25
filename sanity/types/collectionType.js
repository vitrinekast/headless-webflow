import { defineField, defineType } from 'sanity'

export const collectionType = defineType({
  name: 'collection',
  title: 'Collection',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})