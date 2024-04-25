import { defineField, defineType } from 'sanity'

export const partnerType = defineType({
    name: 'partner',
    type: 'object',
    title: 'partner',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'image',
            type: 'image',
        })
    ],
})