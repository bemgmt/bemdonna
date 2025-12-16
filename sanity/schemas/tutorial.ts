import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'tutorial',
  title: 'Tutorial',
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
          { title: 'Getting Started', value: 'getting-started' },
          { title: 'Knowledge Base Setup', value: 'kb-setup' },
          { title: 'Agent Configuration', value: 'agent-config' },
          { title: 'Integrations', value: 'integrations' },
          { title: 'Advanced Features', value: 'advanced' },
        ],
      },
    }),
    defineField({
      name: 'difficulty',
      title: 'Difficulty',
      type: 'string',
      options: {
        list: [
          { title: 'Beginner', value: 'beginner' },
          { title: 'Intermediate', value: 'intermediate' },
          { title: 'Advanced', value: 'advanced' },
        ],
      },
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL',
      type: 'url',
    }),
    defineField({
      name: 'prerequisites',
      title: 'Prerequisites',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string', title: 'Step Title' },
            { name: 'description', type: 'text', title: 'Description', rows: 3 },
            { name: 'image', type: 'image', title: 'Screenshot' },
            { name: 'code', type: 'text', title: 'Code Snippet' },
          ],
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
    }),
  ],
})

