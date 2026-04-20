import { defineField, defineType } from 'sanity'
import { EnvelopeIcon } from '@sanity/icons'

export const finalCta = defineType({
  name: 'finalCta',
  title: 'Final CTA',
  type: 'document',
  icon: EnvelopeIcon,
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      description: 'e.g. "Have a project that needs to work properly?"',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subtext',
      title: 'Subtext',
      type: 'string',
      description: 'e.g. "Let\'s talk."',
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
    }),
  ],
  preview: { prepare: () => ({ title: 'Final CTA' }) },
})
