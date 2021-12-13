import { Component, HTMLProps } from "react"
import { useRouter } from "next/router"
import Link from 'next/link'

import { SidebarItem, SidebarLink } from './styles'

type Props = {
  name: string
  id: string
  toggle: () => void
  attrs?: Component<HTMLProps<HTMLButtonElement>>
}


export const NavLink:React.FC<Props> = ({name, id, toggle, ...rest}) => {
  const { pathname } = useRouter()

  return (
    <SidebarItem onClick={toggle} >
      {
        pathname.toString() !== '/'
        ? (
          <Link href={`/#${id}`} passHref {...rest} >
            <SidebarLink
              to={id}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={() => setTimeout(() => toggle(), 350) }
              delay={250}
            >
              {name}
            </SidebarLink>
          </Link>
        )
        : (
          <SidebarLink
            to={id}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
            onClick={() => setTimeout(() => toggle(), 350) }
            delay={250}
            {...rest}
          >
            {name}
          </SidebarLink>
        )

      }
    </SidebarItem>
  );
}
