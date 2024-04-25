import { defineField, defineType } from 'sanity'
import { PlayIcon } from '@sanity/icons'

export const sliderType = defineType({
    name: 'slider',
    type: 'object',
    title: 'Slider',
    icon: PlayIcon,
    fields: [
        defineField({
            title: "Type of slider",
            description: "Pick the format of your slider",
            name: "type",
            type: "string",
            options: {
                list: ["default", "history", "duo", "default light", "content"]
            },
        }),
        defineField({
            name: 'subtitle',
            type: 'string',
            hidden: ({ parent, value }) => !value && parent?.type === 'content',
        }),
        defineField({
            name: 'title',
            type: 'string',
            hidden: ({ parent, value }) => !value && parent?.type === 'content',
        }),
        defineField({
            name: 'description',
            type: 'string',
            hidden: ({ parent, value }) => !value && parent?.type === 'content',
        }),
        defineField({
            name: 'button',
            type: 'button',
            hidden: ({ parent, value }) => !value && parent?.type === 'content',
        }),
        defineField({
            name: 'collection',
            type: 'reference',
            to: [{ type: 'collection' }],
            hidden: ({ parent, value }) => !value && parent?.type === 'content',
        }),
        defineField({
            name: 'slides',
            type: 'array',
            of: [{ type: 'slide' }],
            hidden: ({ parent, value }) => !value && parent?.type != 'content',
        }),
    ],
})