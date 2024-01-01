import {
  defineField,
  defineType
} from "sanity"

import { DashboardIcon } from "@sanity/icons"

export default defineType({
  name: "experience",
  title: "Experience",
  type: "document",
  icon: DashboardIcon,
  fields: [
    defineField({
      name: "jobTitle",
      title: "Job Title",
      type: "string"
    }),
    defineField({
      name: "company",
      title: "Company",
      type: "string"
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
      name: "companyLogo",
      title: "Company Logo",
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
      name: "currentlyWorkplace",
      title: "Current Workplace?",
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
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "array",
      of: [
        {
          type: "text"
        }
      ]
    })
  ]
})
