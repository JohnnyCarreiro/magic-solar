import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

interface Props {
  primary?: boolean
  big?: boolean
  dark?: boolean
  fontBig?: boolean
}

export const RedirectButton = styled.a<Props>`
  border-radius: 50px;
  background: ${({primary = false, theme})=> (primary ? theme.colors.main_brand : theme.colors.secondary_brand)};
  white-space: nowrap;
  padding: ${({big = false})=> (big ? '14px 48px' : '12px 30px')};
  color: ${({dark = false, theme})=> (dark ? theme.colors.grey_100 : theme.colors.grey_900)};
  font-size: ${({fontBig = false})=> (fontBig ? '1.25rem' : '1rem')};
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({dark = false, theme})=> (dark ? theme.colors.grey_1000 : theme.colors.grey_100)};
    color: ${({dark = false, theme})=> (dark ? theme.colors.grey_1000 : theme.colors.grey_100)};
    background: ${({primary = false, theme})=> (primary ?  theme.colors.secondary_brand : theme.colors.main_brand)};
  }
`
