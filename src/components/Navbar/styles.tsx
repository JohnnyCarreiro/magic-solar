import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

type NavProps = {
  scrollNav: boolean
}
export const Nav = styled.nav<NavProps>`
  background: ${({scrollNav = false}) => (scrollNav ? '#AC9A52' : 'transparent')};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  position: sticky;
  top: 0;
  z-index: 100;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled.a<NavProps>`
  color: ${({scrollNav = false}) => (scrollNav ? '#000E29' : '#fff')};
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 80%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
export const NavMenu = styled.ul `
  display: block;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavItem = styled.li `
  display: inline-flex;
  text-align: center;
  height: 80px;
`
export const NavLink = styled(LinkS)<NavProps> `
  color: ${({scrollNav = false}) => (scrollNav ? '#000E29' : '#fff')};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  /* height: 100%; */
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;

  &.active {
    border-bottom: 5px solid #39837D;
  }
`
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const NavBtnLink = styled.a`
  border-radius: 50px;
  background: #39837D;
  white-space: nowrap;
  padding: 10px 22px;
  color: #fff;
  font-size: 1rem;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2 ease-in-out;
    background: #fff;
    color: #000E29;
  }
`
// export const NavLogo2 = styled(Link)`
//   color: red;
//   justify-self: flex-start;
//   cursor: pointer;
//   font-size: 1.5rem;
//   display: flex;
//   align-items: center;
//   margin-left: 24px;
//   font-weight: bold;
//   text-decoration: none;
// `
// export const NavLogo3 = (props: {name: string, children: React.ReactNode}) => (<NavLogo2 href="/" passHref>{props.children}</NavLogo2>)
