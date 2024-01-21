// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse
} from "next"
import { groq } from "next-sanity"
import { sanityClient } from "../../sanity"

import { Section } from "@/typings"

const query = groq`
  *[_type == "section"] | order(lower(title) asc)
`

type Data = {
  sections: Section[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const sections: Section[] = await sanityClient.fetch(query)

  res.status(200).json({
    sections
  })
}
