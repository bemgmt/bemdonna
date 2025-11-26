import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Job Title',
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
      name: 'department',
      title: 'Department',
      type: 'string',
      options: {
        list: [
          { title: 'Engineering', value: 'engineering' },
          { title: 'Sales', value: 'sales' },
          { title: 'Marketing', value: 'marketing' },
          { title: 'Support', value: 'support' },
          { title: 'Operations', value: 'operations' },
        ],
      },
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),
    defineField({
      name: 'type',
      title: 'Employment Type',
      type: 'string',
      options: {
        list: [
          { title: 'Full-time', value: 'full-time' },
          { title: 'Part-time', value: 'part-time' },
          { title: 'Contract', value: 'contract' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'qualifications',
      title: 'Qualifications',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'niceToHave',
      title: 'Nice to Have',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'applicationUrl',
      title: 'Application URL',
      type: 'url',
      description: 'External ATS link or email',
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})

