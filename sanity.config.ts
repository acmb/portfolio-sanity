import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"
import { visionTool } from "@sanity/vision"
import { schemaTypes } from "./schemas"

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basepath: "/studio",
  dataset,
  name: "PORTFOLIO_Content_Studio",
  plugins: [
    deskTool(),
    visionTool()
  ],
  projectId,
  schema: {
    types: schemaTypes
  },
  title: "PORTFOLIO Content Studio",
})
