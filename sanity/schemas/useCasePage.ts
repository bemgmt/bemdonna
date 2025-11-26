import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'useCasePage',
  title: 'Use Case Page',
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
      name: 'icon',
      title: 'Icon',
      type: 'string',
      description: 'Lucide icon name',
    }),
    defineField({
      name: 'painPoint',
      title: 'Pain Point',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'How DONNA Solves It',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'benefits',
      title: 'Key Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'beforeAfter',
      title: 'Before/After Comparison',
      type: 'object',
      fields: [
        {
          name: 'before',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'Before DONNA',
        },
        {
          name: 'after',
          type: 'array',
          of: [{ type: 'string' }],
          title: 'After DONNA',
        },
      ],
    }),
    defineField({
      name: 'roiMetrics',
      title: 'ROI Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
          ],
        },
      ],
    }),
    defineField({
      name: 'demoUrl',
      title: 'Demo URL',
      type: 'url',
    }),
    defineField({
      name: 'relatedUseCases',
      title: 'Related Use Cases',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'useCasePage' }] }],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description' },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
})

