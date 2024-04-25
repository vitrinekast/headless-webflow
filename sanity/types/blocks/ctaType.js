import { defineField, defineType } from 'sanity'

export const ctaType = defineType({
    name: 'cta',
    type: 'object',
    title: 'Cta',
    fields: [
        defineField({
            name: 'subtitle',
            type: 'string',
        }),
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            title: 'Buttons',
            name: 'buttons',
            type: 'array',
            of: [{ type: 'button' }]
        })
    ]
})