import Head from 'next/head'
import { Container } from '../styles/Home'
import { HeroSection } from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { Services } from '@/components/Services'
import {
  metaTags,
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  heroSection,
  services,
  results,
  contactInfos
} from '@/Data/Data'
import { Results } from '@/components/Results'
import { ContactSection } from '@/components/Contacts'


export default function Home() {
  const { about_us_section } = metaTags
  return (
    <Container>
      <Head>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />

        <meta name="copyright" content={about_us_section.name} />
        <meta name="description" content={about_us_section.content} />

        <meta property="og:site_name" content={about_us_section.name} />

        <meta property="og:title" content={about_us_section.name} />
        <meta property="og:description" content={about_us_section.content} />
        {/* Images */}
        <meta property="og:image" content={`https://www.magicsolar.com.br${about_us_section.image.src}`} />
        <meta property="og:image:type" content="image/png" />

        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={about_us_section.name} />
        <meta name="twitter:description" content={about_us_section.content} />
        <meta name="twitter:image" content={`https://www.magicsolar.com.br${about_us_section.image.src}`} />
        <title>Energia Solar - Magic Solar - Soluções em energia Solar</title>
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
