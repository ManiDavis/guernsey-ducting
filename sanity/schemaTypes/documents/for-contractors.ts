import { defineField, defineType } from 'sanity'
import { UsersIcon } from '@sanity/icons'

export const forContractors = defineType({
  name: 'forContractors',
  title: 'For Contractors',
  type: 'document',
  icon: UsersIcon,
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
      rows: 3,
    }),
    defineField({
      name: 'paragraph2',
      title: 'Second Paragraph',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'Bold closing line, e.g. "Trusted by professionals. Relied on by the island."',
    }),
  ],
  preview: { prepare: () => ({ title: 'For Contractors' }) },
})
