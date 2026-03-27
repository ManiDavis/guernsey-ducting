import type { StructureResolver } from 'sanity/structure'
import {
  CogIcon,
  ComponentIcon,
  InfoOutlineIcon,
  ThListIcon,
  StarIcon,
} from '@sanity/icons'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .icon(CogIcon)
        .child(
          S.document()
            .title('Site Settings')
            .schemaType('siteSettings')
            .documentId('siteSettings'),
        ),
      S.divider(),
      S.listItem()
        .title('Hero Section')
        .icon(StarIcon)
        .child(
          S.document()
            .title('Hero Section')
            .schemaType('hero')
            .documentId('hero'),
        ),
      S.listItem()
        .title('About Section')
        .icon(InfoOutlineIcon)
        .child(
          S.document()
            .title('About Section')
            .schemaType('about')
            .documentId('about'),
        ),
      S.listItem()
        .title('Why Choose Us')
        .icon(ThListIcon)
        .child(
          S.document()
            .title('Why Choose Us')
            .schemaType('whyUs')
            .documentId('whyUs'),
        ),
      S.divider(),
      S.documentTypeListItem('service').title('Services').icon(ComponentIcon),
    ])
