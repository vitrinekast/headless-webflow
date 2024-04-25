import { defineField, defineType } from 'sanity'

export const slideType = defineType({
    name: 'slide',
    type: 'object',
    title: 'Slide',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'text',
        }),
        defineField({
            name: 'image',
            type: 'image',
        })
    ],
})