import {
  defineField,
  defineType
} from "sanity"

import { CodeIcon } from "@sanity/icons"

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  icon: CodeIcon,
  fields: [
    defineField({
      name: "brandColor",
      title: "Brand Colour",
      type: "color"
    }),
    defineField({
      name: "projectTitle",
      title: "Project Title",
      type: "string"
    }),
    defineField({
      name: "summary",
      title: "Summary",
      type: "string",
      validation: (Rule) => Rule.max(40)
    }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
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
      name: "codeURL",
      title: "Code URL",
      type: "url"
    }),
    defineField({
      name: "previewURL",
      title: "Preview URL",
      type: "url"
    }),
    defineField({
      name: "projectBackground",
      title: "Project Background",
      type: "text"
    }),
    defineField({
      name: "futureUse",
      title: "Future Use",
      type: "text"
    }),
    defineField({
      name: "technologies",
      title: "Technologies",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "skill"
          }
        }
      ]
    })
  ]
})
