import { defineField, defineType } from 'sanity'

export const hero = defineType({
  name: 'hero',
  type: 'object',
  title: 'Hero page',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the homepage',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'A brief subtitle for the homepage',
    }),
    defineField({
      name: 'button1',
      title: 'Button',
      type: 'string',
    }),
    defineField({
      name: 'button2',
      title: 'Button',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'The main image displayed on the homepage',
      options: {
        hotspot: true,
      },
    }),
  ],
})
