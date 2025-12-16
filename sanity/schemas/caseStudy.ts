import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'caseStudy',
  title: 'Case Study',
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
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'companyLogo',
      title: 'Company Logo',
      type: 'image',
    }),
    defineField({
      name: 'industry',
      title: 'Industry',
      type: 'string',
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'challenge',
      title: 'The Challenge',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'solution',
      title: 'The Solution',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'results',
      title: 'The Results',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'metrics',
      title: 'Key Metrics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', type: 'string', title: 'Label' },
            { name: 'value', type: 'string', title: 'Value' },
            { name: 'description', type: 'string', title: 'Description' },
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'quote', type: 'text', title: 'Quote' },
            { name: 'author', type: 'string', title: 'Author' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'company', type: 'string', title: 'Company' },
          ],
        },
      ],
    }),
    defineField({
      name: 'productsUsed',
      title: 'Products Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        { name: 'metaTitle', type: 'string', title: 'Meta Title' },
        { name: 'metaDescription', type: 'text', title: 'Meta Description', rows: 3 },
        { name: 'ogImage', type: 'image', title: 'OG Image' },
      ],
    }),
  ],
})

