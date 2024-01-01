import {
  defineField,
  defineType
} from "sanity"

export default defineType({
  name: "social",
  title: "Social",
  type: "document",
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
