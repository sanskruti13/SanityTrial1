import {defineField, defineType} from 'sanity'

export const whyDocBuddys = defineType({
  name: 'whyDocBuddys',
  type: 'object',
  title: 'Why DocBuddys ?',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'cardHeading',
          type: 'string',
          title: 'Alternative text',
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
