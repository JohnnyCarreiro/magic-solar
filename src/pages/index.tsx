import { useState } from 'react'
import Navbar from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import Head from 'next/head'
import { Container } from '../styles/Home'
import HeroSection from '@/components/HeroSection'
import { InfoSection } from '@/components/InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree } from '@/components/InfoSection/Data'
import { Services } from '@/components/Services'

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <Container>
      <Head>
        <title>Template Next Tipescript</title>
      </Head>
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <Services />
    </Container>
  )
}
