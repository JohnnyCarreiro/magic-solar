import { ReactNode } from 'react'

import { ServiceCard, ServicesContainer, ServiceIcon, ServicesMainHeading, ServicesWrapper, ServiceHeading, ServiceDescription } from './styles'
import icon1 from '@/assets/images/services/svg-1.svg'
import icon2 from '@/assets/images/services/svg-1.svg'
import icon3 from '@/assets/images/services/svg-1.svg'

interface ServicesProps {
  children?: ReactNode;
}

export const Services:React.FC<ServicesProps> = ({ children }) => {
  return (
    <ServicesContainer id={'services'}>
      <ServicesMainHeading>Our Services</ServicesMainHeading>
      <ServicesWrapper>
        <ServiceCard>
          <ServiceIcon src={icon1} />
          <ServiceHeading>Service one</ServiceHeading>
          <ServiceDescription>
            Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={icon2} />
          <ServiceHeading>Service Two</ServiceHeading>
          <ServiceDescription>
            Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis.
          </ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon src={icon3} />
          <ServiceHeading>Service Three</ServiceHeading>
          <ServiceDescription>
            Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis.
          </ServiceDescription>
        </ServiceCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}
