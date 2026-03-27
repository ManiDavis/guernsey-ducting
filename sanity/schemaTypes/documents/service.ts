import { defineField, defineType } from 'sanity'
import { ComponentIcon } from '@sanity/icons'

export const service = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Service Title',
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
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'string',
      options: {
        list: [
          { title: 'Rectangular Duct', value: 'rectangular' },
          { title: 'Circular / Spiral Duct', value: 'circular' },
          { title: 'Flexible Duct', value: 'flexible' },
          { title: 'Fittings & Accessories', value: 'fittings' },
          { title: 'Sheet Metal', value: 'sheet-metal' },
          { title: 'Ventilation / Fan', value: 'ventilation' },
        ],
        layout: 'radio',
      },
      description: 'Choose an icon that best represents this service',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first (1 = first, 2 = second, etc.)',
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
})
