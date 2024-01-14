import {
  defineField,
  defineType
} from "sanity"

import { EarthGlobeIcon } from "@sanity/icons"

export default defineType({
  name: "sitewide",
  title: "Sitewide",
  type: "document",
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string"
    }),
    defineField({
      name: "subTitle",
      title: "Sub Title",
      type: "string"
    }),
    defineField({
      name: "heroBgColor",
      title: "Hero Bg Color",
      type: "color"
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
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
    }),
    defineField({
      name: "logo",
      title: "Logo",
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
    }),
    defineField({
      name: "logoLink",
      title: "Logo Link",
      type: "string",
      validation: (Rule) => Rule.lowercase()
    }),
    defineField({
      name: "menu",
      title: "Menu",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "menuName",
              title: "Menu Name",
              type: "string"
            },
            {
              name: "slug",
              title: "Slug",
              type: "string",
              validation: (Rule) => Rule.lowercase()
            }
          ]
        }
      ]
    }),
    defineField({
      name: "typingColor",
      title: "Typing Text Color",
      type: "color"
    }),
    defineField({
      name: "typingText",
      title: "Typing Text",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    })
  ]
})
