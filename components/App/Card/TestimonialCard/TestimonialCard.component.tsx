import Link from "next/link"
import React from "react"

import styles from "./TestimonialCard.module.scss"

type TestimonialCardProps = {
  author: {
    name: string
    role: string
  }
  quote: string
}

export default function TestimonialCard({
  author,
  quote,
}: TestimonialCardProps) {
  const truncateQuote = (character: string, maxLength: number) => {
    return character.length > maxLength ? character.substring(0, maxLength) + "..." : character
  }

  const maxChars = 186
  const displayQuote = truncateQuote(quote, maxChars)

  return (
    <div className={styles.block}>
      <div className={styles.quote}>
        <p className={styles.copy}>
          {displayQuote}
          {quote.length > maxChars && (
            <Link
              aria-label="view quote on LinkedIn profile"
              className={`capitalize font-medium ${styles.link}`}
              href="https://www.linkedin.com/in/rejaur-rahman-a938a657" rel="noopener"
              target="_blank"
            >
              View Quote In Full
            </Link>
          )}
        </p>
      </div>
      <div className={styles.author}>
        <p className={`font-light ${styles.authorName}`}>
          {author.name}
        </p>
        <p className={styles.authorRole}>
          {author.role}
        </p>
      </div>
    </div>
  )
}
