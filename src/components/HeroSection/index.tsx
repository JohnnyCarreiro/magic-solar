import { ReactNode, useCallback, useState } from 'react'
import Link from 'next/link'

import { ArrowForward, ArrowRight, HeroBg, HeroBtnWrapper, HeroContainer, HeroContent, HeroH1, HeroP, VideoBg } from './styles'
import { Button } from '@/components/Button/ButtonElements'
import Video from '@/assets/Solar-Energy.mp4'

interface HeroSectionProps {
  children?: ReactNode
}

function HeroSection({ children }: HeroSectionProps) {
  const [hover, setHover] = useState(false)

  const onHover = useCallback(() => {
    setHover(!hover)
  },[hover])

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={Video}
          playsInline
          // type="video/mp4"
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>Sua empresa faz negócios on-line?</HeroH1>
        <HeroP>
          Mussum Ipsum, cacilds vidis litro abertis. Per aumento de cachacis, eu reclamis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Suco de cevadiss deixa as pessoas mais interessantis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per.
        </HeroP>
        <HeroBtnWrapper>
          <Link href='signup' passHref >
            <Button to='about' onMouseEnter={onHover} onMouseLeave={onHover} >
              De volta ao negócios {hover ? <ArrowForward/> : <ArrowRight/>}
            </Button>
          </Link>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection
