import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
    name: 'siteSettings',
    title: 'site settings',
    type: 'document',
    options: {
        singleton: true, // Identify this document as a singleton
    },
    groups: [
        {
            name: 'footer',
            title: 'Footer',
        },
    ],
    fields: [
        defineField({
            name: 'title',
            title: 'Site title',
            type: 'string'
        }),
        defineField({
            name: 'about',
            title: 'About description',
            type: 'text',
            group: 'footer'
        }),
        defineField({
            name: 'address',
            title: 'address',
            type: 'text',
            group: 'footer'
        }),
        defineField({
            name: 'contact',
            title: 'get in touch text',
            type: 'text',
            group: 'footer'
        }),
        defineField({
            name: 'menu',
            title: 'Menu',
            type: 'array',
            of: [{ type: 'link' }],
            group: 'footer'
        }),
        defineField({
            name: 'legal_menu',
            title: 'Legal Menu',
            type: 'array',
            of: [{ type: 'link' }],
            group: 'footer'
        }),
        defineField({
            name: 'social_menu',
            title: 'Social Menu',
            type: 'array',
            of: [{ type: 'link' }],
            group: 'footer'
        })
    ]
})