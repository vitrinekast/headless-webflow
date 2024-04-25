import { defineArrayMember, defineField, defineType } from 'sanity'

export const pageType = defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({ name: 'hero_title', title: 'Title in Hero', type: 'string' }),
        defineField({ name: 'title', type: 'string' }),
        defineField({ name: 'subtitle', type: 'string' }),
        defineField({ name: 'intro', type: 'text' }),
        defineField({
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
            name: 'pageBuilder',
            type: 'array',
            title: 'Page builder',
            of: [
                defineArrayMember({
                    name: 'slider',
                    type: 'slider',
                }),
                defineArrayMember({
                    name: 'cta',
                    type: 'cta',
                })
            ],
        }),
    ],
})