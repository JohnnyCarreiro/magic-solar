import { ReactNode } from 'react'
import { ContactForm } from '@/components/Forms/contactForm'

import { Container, Form, FormButton, FormContent, FormInput, FormLabel, FormTitle, FormWrapper, Icon, Text } from './styles'

interface AgendaProps {
  children?: ReactNode
}

export const AgendaComponent: React.FC<AgendaProps> = ({ children }) => {
  return (
    <Container>
      <FormWrapper>
        <Icon href="/">Magic Solar</Icon>
        <FormContent>
          <ContactForm />
        </FormContent>
      </FormWrapper>
    </Container>
  )
}
/* <Form action="#">
  <FormTitle>Solicite uma visita ou tire suas dúvidas com um de nosos consultores</FormTitle>
  <FormLabel htmlFor="for">Email</FormLabel>
  <FormInput type="email" value="email" placeholder="Email" />
  <FormLabel htmlFor="for">Password</FormLabel>
  <FormInput type="password" value="password" placeholder="Password" />
  <FormButton type="submit">Submit</FormButton>
  <Text>Forgot password</Text>
</Form> */
