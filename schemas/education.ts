import {
  defineField,
  defineType
} from "sanity"

import { BookIcon } from "@sanity/icons"

export default defineType({
  name: "education",
  title: "Education",
  type: "document",
  icon: BookIcon,
  fields: [
    defineField({
      name: "brandColor",
      title: "Brand Colour",
      type: "color"
    }),
    defineField({
      name: "courseTitle",
      title: "Course Title",
      type: "string"
    }),
    defineField({
      name: "location",
      title: "Location",
      type: "string"
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string"
    }),
    defineField({
      name: "buildingImage",
      title: "Building Image",
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
      name: "companyIcon",
      title: "Company Icon",
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
      name: "currentlyStudying",
      title: "Current Studying?",
      type: "boolean"
    }),
    defineField({
      name: "dateStarted",
      title: "Date Started",
      type: "date"
    }),
    defineField({
      name: "dateEnded",
      title: "Date Ended",
      type: "date"
    }),
    defineField({
      name: "modules",
      title: "Modules",
      type: "text"
    }),
    defineField({
      name: "languages",
      title: "Languages",
      type: "text"
    }),
    defineField({
      name: "certificateFile",
      title: "Certificate File",
      type: "file",
      options: {
        accept: ".pdf"
      }
    })
  ]
})
