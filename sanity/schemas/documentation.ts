import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'documentation',
  title: 'Documentation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'API Reference', value: 'api' },
          { title: 'Webhooks', value: 'webhooks' },
          { title: 'Widget Embedding', value: 'widget' },
          { title: 'Voice Gateway', value: 'voice' },
          { title: 'Integrations', value: 'integrations' },
          { title: 'SDKs', value: 'sdks' },
        ],
      },
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block' },
        {
          type: 'code',
          options: {
            language: 'javascript',
          },
        },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
  ],
})

