import { defineField, defineType, defineArrayMember } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export const whyUs = defineType({
  name: 'whyUs',
  title: 'Why Choose Us',
  type: 'document',
  icon: ThListIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Section Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Section Subtext',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'pillars',
      title: 'Reasons / Pillars',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        }),
      ],
      description: 'Add up to 4 reasons to choose Guernsey Ducting',
      validation: (rule) => rule.max(4),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Why Choose Us' }),
  },
})
