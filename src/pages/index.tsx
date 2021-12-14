import Head from 'next/head'
import { Container } from '../styles/Home'
import HeroSection from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '@/components/InfoSection/Data'
import { Services } from '@/components/Services'

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Magic Solar</title>
      </Head>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
    </Container>
  )
}
