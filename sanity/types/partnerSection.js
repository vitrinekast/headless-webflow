import { defineField, defineType } from 'sanity'

export const partnerSection = defineType({
    name: 'partnerSection',
    title: 'Section: Partners',
    type: 'document',
    options: {
        singleton: true, // Identify this document as a singleton
    },
    fields: [
        defineField({
            name: 'title',
            type: 'string'
        }),
        defineField({
            name: 'subtitle',
            type: 'string'
        }),
        defineField({
            name: 'description',
            type: 'string'
        }),
        defineField({
            title: 'partners',
            name: 'partners',
            type: 'array',
            of: [{ type: 'partner' }]
        })
    ],
})