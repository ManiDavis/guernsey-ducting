import type { StructureResolver } from 'sanity/structure'
import {
  CogIcon,
  ComponentIcon,
  InfoOutlineIcon,
  ThListIcon,
  StarIcon,
  EditIcon,
  PinIcon,
  UsersIcon,
  ClockIcon,
  EnvelopeIcon,
} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(S.document().title('Site Settings').schemaType('siteSettings').documentId('siteSettings')),
      S.divider(),
      S.listItem()
        .title('Hero Section')
        .icon(StarIcon)
        .child(S.document().title('Hero Section').schemaType('hero').documentId('hero')),
      S.listItem()
        .title('The Idea')
        .icon(EditIcon)
        .child(S.document().title('The Idea').schemaType('theIdea').documentId('theIdea')),
      S.listItem()
        .title('About Section')
        .icon(InfoOutlineIcon)
        .child(S.document().title('About Section').schemaType('about').documentId('about')),
      S.listItem()
        .title("Why We're Different")
        .icon(ThListIcon)
        .child(S.document().title("Why We're Different").schemaType('whyUs').documentId('whyUs')),
      S.listItem()
        .title("Where You'll Find Us")
        .icon(PinIcon)
        .child(S.document().title("Where You'll Find Us").schemaType('whereFound').documentId('whereFound')),
      S.listItem()
        .title('For Contractors')
        .icon(UsersIcon)
        .child(S.document().title('For Contractors').schemaType('forContractors').documentId('forContractors')),
      S.listItem()
        .title('Our Story')
        .icon(ClockIcon)
        .child(S.document().title('Our Story').schemaType('ourStory').documentId('ourStory')),
      S.listItem()
        .title('Final CTA')
        .icon(EnvelopeIcon)
        .child(S.document().title('Final CTA').schemaType('finalCta').documentId('finalCta')),
      S.divider(),
      S.documentTypeListItem('service').title('Services').icon(ComponentIcon),
    ])
