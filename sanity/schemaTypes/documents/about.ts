import { defineField, defineType, defineArrayMember } from 'sanity'
import { InfoOutlineIcon } from '@sanity/icons'

export const about = defineType({
  name: 'about',
  title: 'About Section',
  type: 'document',
  icon: InfoOutlineIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph1',
      title: 'First Paragraph',
      type: 'text',
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'paragraph2',
      title: 'Second Paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'checklist',
      title: 'Key Points (tick list)',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      description: 'Each entry becomes a tick-list item. Add up to 6.',
      validation: (rule) => rule.max(6),
    }),
  ],
  preview: {
    prepare: () => ({ title: 'About Section' }),
  },
})
