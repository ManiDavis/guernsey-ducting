import { defineQuery } from 'next-sanity'

export const SITE_DATA_QUERY = defineQuery(`{
  "settings": *[_type == "siteSettings"][0]{
    companyName,
    shortName,
    tagline,
    phone,
    email,
    address,
    hours
  },
  "hero": *[_type == "hero"][0]{
    badge,
    headline,
    subheadline,
    primaryCtaLabel,
    secondaryCtaLabel,
    "stats": stats[]{ _key, value, label }
  },
  "services": *[_type == "service"] | order(order asc){
    _id,
    title,
    description,
    icon
  },
  "about": *[_type == "about"][0]{
    headline,
    paragraph1,
    paragraph2,
    checklist
  },
  "whyUs": *[_type == "whyUs"][0]{
    headline,
    subtext,
    "pillars": pillars[]{ _key, title, description }
  }
}`)
