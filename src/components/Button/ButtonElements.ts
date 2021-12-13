import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

interface Props {
  primary?: boolean
  big?: boolean
  dark?: boolean
  fontBig?: boolean
}

export const Button = styled(LinkS)<Props>`
  border-radius: 50px;
  background: ${({primary = false})=> (primary ? '#01BF71' : '#010606')};
  white-space: nowrap;
  padding: ${({big = false})=> (big ? '14px 48px' : '12px 30px')};
  color: ${({dark = false})=> (dark ? '#010606' : '#fff')};
  font-size: ${({fontBig = false})=> (fontBig ? '1.25rem' : '1rem')};
  outline: none;
  border: none;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: ${({primary = false})=> (primary ? '#fff' : '#010606')};
    background: ${({primary = false})=> (primary ?  '#010606' : '#01BF71')};
  }
`
