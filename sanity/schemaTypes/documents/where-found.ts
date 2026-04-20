import { defineField, defineType } from 'sanity'
import { PinIcon } from '@sanity/icons'

export const whereFound = defineType({
  name: 'whereFound',
  title: 'Where You\'ll Find Us',
  type: 'document',
  icon: PinIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Section Headline',
      type: 'string',
    }),
    defineField({
      name: 'environments',
      title: 'Environments',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Each entry is a location or environment type',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'e.g. "There\'s a good chance you\'ve experienced our work — even if you didn\'t know it."',
    }),
  ],
  preview: { prepare: () => ({ title: "Where You'll Find Us" }) },
})
