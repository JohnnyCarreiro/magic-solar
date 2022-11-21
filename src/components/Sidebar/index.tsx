import React, { ReactNode } from 'react'
import Link from 'next/link'

import { navLinks } from '@/Data/Data'
import { NavLink } from './NavLink'
import { CloseIcon,
  Icon,
  SidebarBtnLink,
  SidebarBtnWrapper,
  SidebarContainer,
  SidebarMenu,
  SidebarWrapper
} from './styles'

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
          <Link href='/agenda' passHref >
            <SidebarBtnLink>Agenda</SidebarBtnLink>
          </Link>
        </SidebarBtnWrapper>
      </SidebarWrapper>
    </SidebarContainer>
  )
}
