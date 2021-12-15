import Head from 'next/head'
import { Container } from '../styles/Home'
import { HeroSection } from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { Services } from '@/components/Services'
import { homeObjOne, homeObjTwo, homeObjThree, heroSection, services } from '@/Data/Data'


export default function Home() {
  console.log('Hoeme: ', services)
  return (
    <Container>
      <Head>
        <title>Magic Solar</title>
      </Head>
      <HeroSection {...heroSection} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services services={services} />
      <InfoSection {...homeObjThree} />
    </Container>
  )
}
