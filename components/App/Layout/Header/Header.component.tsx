"use client"

import * as NavigationMenu from "@radix-ui/react-navigation-menu"
import React from "react"

import Container from "@/components/App/Container/Container.component"
import HeaderLogo from "@/components/App/Layout/HeaderLogo/HeaderLogo.component"
import HeaderMenu from "@/components/App/Layout/HeaderMenu/HeaderMenu.component"
import HeaderModal from "@/components/App/Layout/HeaderModal/HeaderModal.component"

import styles from "./Header.module.scss"

export default function Header() {
  return (
    <header
      className={`sticky w-full top-0 z-50 ${styles.header}`}
    >
      <NavigationMenu.Root>
        <Container
          containerClassName="flex items-center justify-between"
        >
          <HeaderLogo />
          <HeaderMenu />
          <HeaderModal />
        </Container>
      </NavigationMenu.Root>
    </header>
  )
}
