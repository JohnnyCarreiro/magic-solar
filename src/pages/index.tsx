import Head from 'next/head'
import { Container } from '../styles/Home'
import { HeroSection } from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { Services } from '@/components/Services'
import { homeObjOne, homeObjTwo, homeObjThree, heroSection, services, results, contactInfos } from '@/Data/Data'
import { Results } from '@/components/Results'
import { ContactSection } from '@/components/Contacts'


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
      <Results results={results} />
      <ContactSection {...contactInfos} />
    </Container>
  )
}
