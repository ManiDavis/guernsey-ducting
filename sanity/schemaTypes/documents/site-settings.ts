import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'companyName',
      title: 'Full Company Name',
      type: 'string',
      description: 'e.g. Guernsey Ducting & Manufacturing Co Ltd',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'shortName',
      title: 'Short Name (used in navigation)',
      type: 'string',
      description: 'e.g. Guernsey Ducting',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      description: 'A short description shown in the footer',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'text',
      rows: 3,
      description: 'Shown in the contact section',
    }),
    defineField({
      name: 'hours',
      title: 'Business Hours',
      type: 'string',
      description: 'e.g. Monday – Friday, closes 4:30pm',
    }),
  ],
  preview: {
    prepare: () => ({ title: 'Site Settings' }),
  },
})
