import {
  defineField,
  defineType
} from "sanity"

export default defineType({
  name: "sitewide",
  title: "Sitewide",
  type: "document",
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
      name: "heroBg",
      title: "Hero Bg Color",
      type: "color"
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true
      }
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
              type: "string"
            }
          ]
        }
      ]
    }),
    defineField({
      name: "socials",
      title: "Socials",
      type: "array",
      of: [
        {
          type: "reference",
          to: {
            type: "Social"
          }
        }
      ]
    })
  ]
})
