import React, { ReactNode } from 'react'
import Link from 'next/link'

import { navLinks } from '../Navbar/links'
import { NavLink } from './NavLink'
import { CloseIcon, Icon, SidebarBtnLink, SidebarBtnWrapper, SidebarContainer, SidebarItem, SidebarLink, SidebarMenu, SidebarWrapper } from './styles'

interface SidebarProps {
  children?: ReactNode
  isOpen: boolean
  toggle: () => void
}

export const Sidebar:React.FC<SidebarProps> = ({ children, isOpen = false, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      <Icon onClick={toggle} >
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          {navLinks.map((link) => (
            <NavLink key={link.id} name={link.name} id={link.id} toggle={toggle} />
          ))}
        </SidebarMenu>
        <SidebarBtnWrapper>
          <Link prefetch href='/signin' passHref >
            <SidebarBtnLink>Sign In</SidebarBtnLink>
          </Link>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
