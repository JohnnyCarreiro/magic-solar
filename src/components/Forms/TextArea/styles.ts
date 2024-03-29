import styled, { css, ThemeProps } from 'styled-components'
import { Theme } from 'styles/styled'
import Tooltip from 'components/Tooltip'

interface ContainerProps extends ThemeProps<Theme> {
  isFocused:boolean
  isFilled:boolean
  isErrored: boolean
}
export const Container = styled.div`
  & + div {
    margin-top:0.5rem;
  }
  .label {
    display: flex;
    align-items: center;
    > label {
      font: ${({theme}) => theme.texts.main_strong};
      color: ${({theme}) => theme.colors.grey_900};
      text-transform: uppercase;
    }
    svg{
      height: 18px;
      width: auto;
      margin-right:0.5rem;
      color:${({theme})=> theme.colors.secondary_brand};
    }
  }
`

export const TextAreaContainer = styled.div<ContainerProps>`
  background: #fff;
  border-radius:.5rem;
  margin-top: 0.5rem;
  padding:1rem;
  width:100%;
  display:flex;
  align-items: flex-start;

  border: 2px solid ${({theme})=>theme.colors.primary};
  color: ${({theme})=>theme.colors.gray_400};

  ${props=>props.isErrored && css`
    border-color:${({theme}) => (theme.colors.danger)};
  `}
  ${props=>props.isFocused && css`
    color:${({theme})=>theme.colors.secondary};
    border-color:${({theme})=>theme.colors.secondary};
  `}
  ${props=>props.isFilled && css`
    color:${({theme})=>theme.colors.secondary};
  `}
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    -webkit-text-fill-color: ${({theme})=>theme.colors.secondary};
    -webkit-box-shadow: 0 0 0px 1000px ${({theme})=>theme.colors.gray_200} inset;
    box-shadow:0 0 0px 1000px ${({theme})=>theme.colors.gray_200} inset;
    /* transition: background-color 5000s ease-in-out 0s; */
  }
  textarea{
    flex:1;
    background:transparent;
    border:none;
    color:${({theme})=>theme.colors.gray_400};
    font: ${({theme}) => theme.texts.main_text};
    &::placeholder{
      color:${({theme})=>theme.colors.gray_400};
      font: ${({theme}) => theme.texts.main_text};
    }
  }
  svg{
    margin-right:1rem;
    color:${({theme})=> theme.colors.gray_400};
  }
`
export const Error = styled(Tooltip)`
  height:1.25rem;
  margin-left:1rem;
  svg{
    margin:0;
  }
  span{
    background:${({theme}) => (theme.colors.danger)};
    color: #fff;

    &::before{
      border-color:${({theme}) => (theme.colors.danger)} transparent;
    }
  }
  `
  export const PassIcon = styled.div`
    height:1.25rem;
    margin-left:1rem;
    svg{
      margin:0;
      color:${({theme})=> theme.colors.grey_1000};
      cursor: pointer;

    }
  `
