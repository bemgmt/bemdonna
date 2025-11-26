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
          { title: 'SDKs & Libraries', value: 'sdks' },
        ],
      },
    }),
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
      description: 'Order in navigation',
    }),
    defineField({
      name: 'parent',
      title: 'Parent Page',
      type: 'reference',
      to: [{ type: 'documentation' }],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      of: [{ type: 'block' }, { type: 'image' }, { type: 'code' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
})

