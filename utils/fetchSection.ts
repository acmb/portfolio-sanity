import { Section } from "@/typings"

export const fetchSections = async () => {
  const res = await fetch(
    `
      ${process.env.NEXT_PUBLIC_BASE_URL}/api/getSections
    `
  )

  const data = await res.json()
  const sections: Section[] = data.sections

  return sections
}
