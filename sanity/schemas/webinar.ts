import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'webinar',
  title: 'Webinar',
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
      rows: 4,
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Upcoming Live', value: 'upcoming' },
          { title: 'On-Demand Recording', value: 'on-demand' },
        ],
      },
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date & Time',
      type: 'datetime',
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'number',
    }),
    defineField({
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', type: 'string', title: 'Name' },
            { name: 'role', type: 'string', title: 'Role' },
            { name: 'bio', type: 'text', title: 'Bio', rows: 3 },
            { name: 'photo', type: 'image', title: 'Photo' },
          ],
        },
      ],
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video URL (for on-demand)',
      type: 'url',
    }),
    defineField({
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
    }),
    defineField({
      name: 'topics',
      title: 'Topics Covered',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})

