import { ReactNode, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { animateScroll as scroll } from 'react-scroll'

import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { navLinks } from './links'
import { NavLink } from './NavLink'
import { Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavBtn, NavBtnLink } from './styles'

interface NavbarProps {
  children?: ReactNode
  toggle: () => void
}

function Navbar({ children, toggle }: NavbarProps) {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNavBG = useCallback(() => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  },[])

  useEffect(() => {
    window.addEventListener('scroll', changeNavBG)
  },[])

  const toggleHome = useCallback(() => {
    scroll.scrollToTop()
  },[])
  return (
    <IconContext.Provider value={{color: '#fff'}}>
      <Nav scrollNav={scrollNav} >
        <NavContainer>
          <Link href='/' passHref >
            <NavLogo onClick={toggleHome} >ConsoliDados</NavLogo>
          </Link>
          <MobileIcon onClick={toggle} >
            <FaBars />
          </MobileIcon>
          <NavMenu>
            {
              navLinks.map((link) => (
                <NavLink key={link.id} name={link.name} id={link.id} />
              ))
            }
          </NavMenu>
          <NavBtn>
            <Link href='/signin' passHref >
              <NavBtnLink>Sing In</NavBtnLink>
            </Link>
          </NavBtn>
        </NavContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
