import {
  defineField,
  defineType
} from "sanity"

import { CubeIcon } from "@sanity/icons"

export default defineType({
  name: "skill",
  title: "Skill",
  type: "document",
  icon: CubeIcon,
  fields: [
    defineField({
      name: "brandColor",
      title: "Brand Colour",
      type: "color"
    }),
    defineField({
      name: "technologyTitle",
      title: "Technology Title",
      type: "string"
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          {
            title: "HTML/CSS",
            value: "html-css"
          },
          {
            title: "CMS",
            value: "cms"
          },
          {
            title: "JS",
            value: "js"
          },
          {
            title: "Other",
            value: "other"
          }
        ]
      }
    }),
    defineField({
      name: "technologyLogo",
      title: "technologyLogo",
      type: "image",
      options: {
        hotspot: true
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text"
        }
      ]
    })
  ]
})
