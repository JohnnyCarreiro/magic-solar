import { Component, HTMLProps } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'

import { NavItem, NavLink as LinkS } from './styles'

type Props =  {
  name: string
  id: string
  attrs?: Component<HTMLProps<HTMLButtonElement>>
  scrollNav: boolean
}

export const NavLink:React.FC<Props> = ({name, id, scrollNav, ...rest}) => {
  const { pathname } = useRouter()

  return (
    <NavItem>
      {
        pathname.toString() !== '/'
        ? (
          <Link href={`/#${id}`} passHref {...rest}>
            <LinkS
              to={id}
              smooth={true}
              duration={500}
              spy={true}
              // exact="true"
              offset={-80}
              scrollNav={scrollNav}
            >
              {name}
            </LinkS>
          </Link>
        )
        : (
          <LinkS
            to={id}
            smooth={true}
            duration={500}
            spy={true}
            // exact="true"
            offset={-80}
            scrollNav={scrollNav}
            href={`#${id}`}
            {...rest}
          >
            {name}
          </LinkS>
        )

      }
    </NavItem>
  );
}
