import { ReactNode } from 'react'
import { AgendaContainer } from '@/styles/agenda'
import { AgendaComponent } from '@/components/AgendaComponent'

interface SigninProps {
  children: ReactNode;
}

export const Agenda: React.FC<SigninProps> = ({ children }) => {
  return (
    <AgendaContainer>
      <AgendaComponent />
    </AgendaContainer>
  )
}

export default Agenda
