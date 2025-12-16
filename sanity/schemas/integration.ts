import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'integration',
  title: 'Integration',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'CRM', value: 'crm' },
          { title: 'Email', value: 'email' },
          { title: 'Calendar', value: 'calendar' },
          { title: 'Payment', value: 'payment' },
          { title: 'Communication', value: 'communication' },
          { title: 'Other', value: 'other' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'url',
      title: 'Integration URL',
      type: 'url',
    }),
  ],
})

