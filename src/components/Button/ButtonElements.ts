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
  background: ${({primary = false})=> (primary ? '#39837D' : '#000E29')};
  white-space: nowrap;
  padding: ${({big = false})=> (big ? '14px 48px' : '12px 30px')};
  color: ${({dark = false})=> (dark ? '#000E29' : '#fff')};
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
    /* color: ${({primary = false})=> (primary ? '#fff' : '#000E29')}; */
    color: #fff;
    background: ${({primary = false})=> (primary ?  '#AC9A52' : '#39837D')};
  }
`
