import {
  defineField,
  defineType
} from "sanity"

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({
      name: "author",
      title: "Author",
      type: "string"
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string"
    }),
    defineField({
      name: "quote",
      title: "Quote",
      type: "text"
    })
  ]
})
