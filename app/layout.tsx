import React from "react"

import type { Metadata } from "next"

import metaImage from "@/assets/images/rejaur-ronny-rahman.png"

import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rejaurrahman.co.uk"),
  title: "Rejaur Rahman | Front End Developer",
  description: "I am Rejaur Rahman. You can call me Ronny. I am a Front End Web Developer with loads of commercial experience working in London.",
  alternates: {
    canonical: "https://rejaurrahman.co.uk"
  },
  openGraph: {
    title: "Rejaur Rahman | Front End Developer",
    description: "I am Rejaur Rahman. You can call me Ronny. I am a Front End Web Developer with loads of commercial experience working in London.",
    images: `/${metaImage.src}`,
    url: "https://rejaurrahman.co.uk"
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      className="scroll-smooth"
      lang="en"
      style={{ scrollBehavior: "smooth" }}
    >
      <body>
        {children}
      </body>
    </html>
  )
}
