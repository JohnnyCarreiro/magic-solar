import styled, { css, ThemeProps } from 'styled-components'
import { Theme } from 'styles/styled'

interface ContainerProps extends ThemeProps<Theme> {
  isPackage?: boolean
}

export const ModalBackground = styled.div<ContainerProps>`
 background: ${({theme}) => theme.colors.main_brand};
  max-width: 600px;
  width: 100%;
  height: auto;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }

`
export const FormTitle = styled.h2`
  margin-bottom: 40px;
  color: ${({theme}) => theme.colors.grey_1000};
  font-size: 1.25;
  font-weight: 600;
  text-align: center;
`
export const RegistrationInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  color: ${({theme}) => theme.colors.grey_1000};
`
export const RegistrationName = styled.div`
  width: 100%;
  > div {
    &+div{
      margin-top: 1rem;
    }
  }
`
export const RegistrationContacts = styled.div`
  margin-top: 1rem;
  width: 100%;
  > div {
    &+div{
      margin-top: 1rem;
    }
  }
`
export const MessageField = styled.div`
  margin-top: 1rem;
  > div {
    &+div{
      margin-top: 1rem;
    }
  }
`
