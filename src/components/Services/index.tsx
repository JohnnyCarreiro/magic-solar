import {
  ServiceCard,
  ServicesContainer,
  ServiceIcon,
  ServicesMainHeading,
  ServicesWrapper,
  ServiceHeading,
  ServiceDescription
} from './styles'

type ServiceInfo = {
  heading: string
  description: string
  img: any
  alt: string
}

interface ServicesProps {
  services: ServiceInfo[]
}

export const Services:React.FC<ServicesProps> = ({services}) => {
  console.log(services[0].img)
  return (
    <ServicesContainer id={'services'}>
      <ServicesMainHeading>Serviços</ServicesMainHeading>
      <ServicesWrapper>
        {services.map((service) => {
          const { heading, description, img, alt } = service
          return (
            <ServiceCard>
              <ServiceIcon src={img} alt={alt} />
              <ServiceHeading>{heading}</ServiceHeading>
              <ServiceDescription>
                {description}
              </ServiceDescription>
            </ServiceCard>
          )
        })}
      </ServicesWrapper>
    </ServicesContainer>
  )
}
