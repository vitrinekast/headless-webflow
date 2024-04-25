import { defineField, defineType } from 'sanity'

export const plantType = defineType({
  name: 'plant',
  title: 'Plant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField(
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200,
          slugify: input => input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 200)
        }
      }),
    defineField({
      name: 'collection',
      type: 'reference',
      to: [{ type: 'collection' }],
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
})