import { ReactNode } from 'react'

import { Container, Form, FormButton, FormContent, FormInput, FormLabel, FormTitle, FormWrapper, Icon, Text } from './styles'

interface SigninProps {
  children?: ReactNode
}

function SignInComponent({ children }: SigninProps) {
  return (
    <Container>
      <FormWrapper>
        <Icon href="/">Consolidados</Icon>
        <FormContent>
          <Form action="#">
            <FormTitle>Title for this Section</FormTitle>
            <FormLabel htmlFor="for">Email</FormLabel>
            <FormInput type="email" value="email" placeholder="Email" />
            <FormLabel htmlFor="for">Password</FormLabel>
            <FormInput type="password" value="password" placeholder="Password" />
            <FormButton type="submit">Submit</FormButton>
            <Text>Forgot password</Text>
          </Form>
        </FormContent>
      </FormWrapper>
    </Container>
  )
}

export default SignInComponent
