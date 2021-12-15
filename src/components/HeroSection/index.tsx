import { useCallback, useState } from 'react'

import { Button } from '@/components/Button/ButtonElements'
import Video from '@/assets/Solar-Energy.mp4'
import {
  ArrowForward,
  ArrowRight,
  HeroBg,
  HeroBtnWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg
} from './styles'

type HeroSectionProps = {
    heading: string
    description: string
    cta: string
    scrollToId: string
}

export const  HeroSection: React.FC<HeroSectionProps> = (heroSection) => {
  const { heading, description, cta, scrollToId } = heroSection
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
        <HeroH1>{heading}</HeroH1>
        <HeroP>
          {description}
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to={scrollToId}
            href={`/#${scrollToId}`}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            smooth={true}
            duration={500}
            spy={true}
            offset={-80}
          >
            {cta} {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}
