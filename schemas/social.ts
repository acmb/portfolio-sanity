import {
  defineField,
  defineType
} from "sanity"

import { TwitterIcon } from "@sanity/icons"

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
  icon: TwitterIcon,
  fields: [
    defineField({
      name: "socialTitle",
      title: "Social Title",
      type: "string"
    }),
    defineField({
      name: "socialUrl",
      title: "Social Url",
      type: "url"
    }),
    defineField({
      name: "SocialIcon",
      title: "Social Icon",
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
      name: "primaryColor",
      title: "Primary Colour",
      type: "color"
    }),
    defineField({
      name: "secondaryColor",
      title: "Secondary Colour",
      type: "color"
    }),
  ]
})
