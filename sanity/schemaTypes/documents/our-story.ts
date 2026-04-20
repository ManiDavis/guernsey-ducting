import { defineField, defineType } from 'sanity'
import { ClockIcon } from '@sanity/icons'

export const ourStory = defineType({
  name: 'ourStory',
  title: 'Our Story',
  type: 'document',
  icon: ClockIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'paragraph1',
      title: 'First Paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'paragraph2',
      title: 'Second Paragraph',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: { prepare: () => ({ title: 'Our Story' }) },
})
