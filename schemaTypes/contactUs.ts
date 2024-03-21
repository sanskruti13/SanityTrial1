import {defineField, defineType} from 'sanity'

export const contactUs = defineType({
  name: 'contactUs',
  type: 'object',
  title: 'Contact Us',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Title',
        }),
      ],
    }),
  ],
})