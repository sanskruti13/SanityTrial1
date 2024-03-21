import { defineField, defineType } from 'sanity'

export const weProvideYou = defineType({
    name: 'weProvideYou',
    type: 'object',
    title: 'We Provide You',
    fields: [
            defineField({
                name: 'image',
                type: 'image',
                options: { hotspot: true },
                fields: [
                    defineField({
                        name: 'cardHeading',
                        type: 'string',
                        title: 'Card Heading',
                    }),
                ],
            }),
            defineField({
                name: 'description',
                title: 'Description',
                type: 'string',
            }),
        ],
    })
    