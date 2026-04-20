import { defineField, defineType, defineArrayMember } from 'sanity'
import { ThListIcon } from '@sanity/icons'

export const whyUs = defineType({
  name: 'whyUs',
  title: "Why We're Different",
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
      rows: 2,
    }),
    defineField({
      name: 'pillars',
      title: 'Differentiators',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        }),
      ],
      validation: (rule) => rule.max(6),
    }),
  ],
  preview: { prepare: () => ({ title: "Why We're Different" }) },
})
