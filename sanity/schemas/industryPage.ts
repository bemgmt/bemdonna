import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'industryPage',
  title: 'Industry Page',
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
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'intro',
      title: 'Introduction',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'workflows',
      title: 'Prebuilt Workflows',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Workflow Name' },
            { name: 'description', type: 'text', title: 'Description', rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: 'scenarios',
      title: 'Common Scenarios',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'type', type: 'string', title: 'Type', options: { list: ['voice', 'chat', 'email'] } },
            { name: 'title', type: 'string', title: 'Title' },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
          ],
        },
      ],
    }),
    defineField({
      name: 'compliance',
      title: 'Compliance Notes',
      type: 'text',
      rows: 4,
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

