import { ReactNode } from 'react'
import { SigninContainer } from '@/styles/signin'
import SignInComponent from '@/components/SignIn'

interface SigninProps {
  children: ReactNode;
}

export const Signin: React.FC<SigninProps> = ({ children }) => {
  return (
    <SigninContainer>
      <SignInComponent />
    </SigninContainer>
  )
}

export default Signin
