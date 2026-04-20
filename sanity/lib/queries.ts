import { defineQuery } from 'next-sanity'

export const SITE_DATA_QUERY = defineQuery(`{
  "settings": *[_type == "siteSettings"][0]{
    companyName, shortName, tagline, phone, email, address, hours
  },
  "hero": *[_type == "hero"][0]{
    badge, headline, subheadline, primaryCtaLabel, secondaryCtaLabel, videoUrl,
    "stats": stats[]{ _key, value, label }
  },
  "theIdea": *[_type == "theIdea"][0]{
    heading, lines, closing
  },
  "services": *[_type == "service"] | order(order asc){
    _id, title, description, icon
  },
  "whyUs": *[_type == "whyUs"][0]{
    headline, subtext,
    "pillars": pillars[]{ _key, title, description }
  },
  "whereFound": *[_type == "whereFound"][0]{
    headline, environments, tagline
  },
  "forContractors": *[_type == "forContractors"][0]{
    headline, paragraph1, paragraph2, tagline
  },
  "ourStory": *[_type == "ourStory"][0]{
    headline, paragraph1, paragraph2
  },
  "finalCta": *[_type == "finalCta"][0]{
    headline, subtext, buttonLabel
  },
  "about": *[_type == "about"][0]{
    headline, paragraph1, paragraph2, checklist
  }
}`)
