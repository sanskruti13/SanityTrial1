import { defineArrayMember, defineField, defineType } from 'sanity'

export const page = defineType({
    name: 'page',
    type: 'document',
    title: 'Page',
    fields: [
        defineField({ name: 'title', type: 'string' }),
        defineField({
            name: 'pageBulider',
            type: 'array',
            title: 'PageBulider',
            of: [
                defineArrayMember({
                    name: 'hero',
                    type: 'hero',
                }),
                defineArrayMember({
                    name: 'whyDocBuddys',
                    type: 'whyDocBuddys',
                }),
                defineArrayMember({
                    name: 'weProvideYou',
                    type: 'weProvideYou',
                }),
                defineArrayMember({
                    name: 'contactUs',
                    type: 'contactUs',
                }),
            ],
        }),
    ],
})
