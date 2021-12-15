import {
  ServiceCard,
  ServicesContainer,
  ServiceIcon,
  ServicesMainHeading,
  ServicesWrapper,
  ServiceHeading,
  ServiceDescription
} from './styles'

type ResultInfo = {
  heading: string
  description: string
  img: any
  alt: string
}

interface ResultsProps {
  results: ResultInfo[]
}

export const Results:React.FC<ResultsProps> = ({results}) => {
  return (
    <ServicesContainer id={'services'}>
      <ServicesMainHeading>Our Services</ServicesMainHeading>
      <ServicesWrapper>
        {results.map((result) => {
          const { heading, description, img, alt } = result
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
