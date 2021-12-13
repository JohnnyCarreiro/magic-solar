import { ReactNode } from 'react'
import { Button } from '../Button/ButtonElements'
import { InfoSectionProps } from './entity'

import { BtnWrapper, Column1, Column2, Heading, Img, ImgWrapper, InfoContainer, InfoRow, InfoWrapper, Subtitle, TextWrapper, TopLine } from './styles'

export const InfoSection:React.FC<InfoSectionProps> = (infoSectionProps) => {
  const {
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    buttonLabel,
    imgStart,
    img,
    alt,
    dark,
    primary,
    darkText
  } = infoSectionProps
  return (
    <InfoContainer id={id} lightBg={lightBg} >
      <InfoWrapper>
        <InfoRow imgStart={imgStart} >
          <Column1>
            <TextWrapper>
              <TopLine>{topLine}</TopLine>
              <Heading lightText={lightText} >{headLine}</Heading>
              <Subtitle darkText={darkText} >{description}</Subtitle>
              <BtnWrapper>
                <Button
                  primary={primary}
                  dark={dark}
                  to='home'
                  smooth={true}
                  duration={500}
                  spy={true}
                  // exact="true"
                  offset={-80}
                >
                  {buttonLabel}
                </Button>
              </BtnWrapper>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrapper>
              <Img src={img.src} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

