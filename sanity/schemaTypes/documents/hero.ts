import { defineField, defineType, defineArrayMember } from 'sanity'
import { StarIcon } from '@sanity/icons'

export const hero = defineType({
  name: 'hero',
  title: 'Hero Section',
  type: 'document',
  icon: StarIcon,
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'Small pill text above the headline (leave blank to hide)',
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'text',
      rows: 2,
      description: 'Press Enter between lines to add a line break in the heading',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subheadline',
      title: 'Subheadline',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCtaLabel',
      title: 'Primary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaLabel',
      title: 'Secondary Button Text',
      type: 'string',
    }),
    defineField({
      name: 'videoUrl',
      title: 'Hero Video URL (optional)',
      type: 'url',
      description: 'Direct link to an MP4 video file for the background. Leave blank to use the default gradient. On mobile, the gradient is always shown.',
    }),
    defineField({
      name: 'stats',
      title: 'Stats (shown below buttons)',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'value', title: 'Value', type: 'string', validation: (rule) => rule.required() }),
            defineField({ name: 'label', title: 'Label', type: 'string', validation: (rule) => rule.required() }),
          ],
          preview: { select: { title: 'value', subtitle: 'label' } },
        }),
      ],
      validation: (rule) => rule.max(3),
    }),
  ],
  preview: { prepare: () => ({ title: 'Hero Section' }) },
})
