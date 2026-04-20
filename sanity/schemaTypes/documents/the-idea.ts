import { defineField, defineType } from 'sanity'
import { EditIcon } from '@sanity/icons'

export const theIdea = defineType({
  name: 'theIdea',
  title: 'The Idea Section',
  type: 'document',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      description: 'e.g. "What you don\'t see is often what makes everything work."',
    }),
    defineField({
      name: 'lines',
      title: 'Body Lines',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each entry is a separate line. Short, punchy lines work best.',
    }),
    defineField({
      name: 'closing',
      title: 'Closing Line',
      type: 'string',
      description: 'e.g. "That\'s where we come in."',
    }),
  ],
  preview: { prepare: () => ({ title: 'The Idea Section' }) },
})
