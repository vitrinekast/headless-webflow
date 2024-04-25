import { defineField, defineType } from 'sanity'

export const linkType = defineType({
    name: 'link',
    type: 'object',
    title: 'link',
    fields: [
        defineField({
            name: 'label',
            type: 'string',
        }),
        defineField({
            name: 'link',
            type: 'url',
        })
    ],
})