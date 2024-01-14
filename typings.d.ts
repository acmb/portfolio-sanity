interface SanityBody {
  _createdAt: string
  _id: string
  _rev: string
  _updatedAt: string
}

interface Color {
  _type: "color",
  alpha: number
  hex: string
}

interface BaseImage {
  _type: "image"
  asset: {
    _ref: string
    _type: "reference"
  }
}

interface MenuItem {
  _key: string
  menuName: string
  slug: string
}

interface PDF {
  _type: "file"
  asset: {
    _ref: string
    _type: "reference"
  }
}

export interface Education extends SanityBody {
  _type: "education"
  brandColor: Color
  buildingImage: BaseImage
  certificateFile: PDF
  companyName: string
  companyIcon: BaseImage
  currentlyStudying: boolean
  dateEnded: date
  dateStarted: date
  modules: string
  languages: string
  location: string
  title: string
}

export interface Experience extends SanityBody {
  _type: "experience"
  company: string
  companyIcon: BaseImage
  companyLogo: BaseImage
  contractRole: boolean
  currentlyWorkplace: boolean
  dateEnded: date
  dateStarted: date
  description: string[]
  technologies: Skill[]
  role: string
}

export interface Project extends SanityBody {
  _type: "project"
  brandColor: Color
  codeURL: string
  coverImage: BaseImage
  futureUse: string
  previewURL: string
  projectBackground: string
  summary: string
  technologies: Skill[]
  title: string
}

export interface Skill extends SanityBody {
  _type: "skill"
  activeSkill?: boolean
  brandColor: Color
  category: string
  logo: BaseImage
  title: string
}

export interface Sitewide extends SanityBody {
  _type: "sitewide"
  heroBgColor: Color
  heroImage: BaseImage
  logo: BaseImage
  menu: MenuItem[]
  name: string
  subTitle: string
}

export interface Social extends SanityBody {
  _type: "social"
  icon: BaseImage
  primaryColor: Color
  secondaryColor: Color
  title: string
  url: string
}

export interface Testimonial extends SanityBody {
  _type: "testimonial"
  author: string
  quote: string
  role: string
}
