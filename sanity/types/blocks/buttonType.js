import { defineField, defineType } from 'sanity'

export const buttonType = defineType({
    name: 'button',
    type: 'object',
    title: 'button',
    fields: [
        defineField({
            title: "Type of button",
            description: "Pick the format of your button",
            name: "type",
            type: "string",
            options: {
                list: ["primary", "secondary"]
            },
        }),
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