import { InfoSectionProps } from './entity'
import { Button } from '../Button/ButtonElements'

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
    imgStart,
    img,
    alt,
    buttonLabel,
    scrollToId,
    dark,
    primary,
  } = infoSectionProps
  return (
    <InfoContainer id={id} lightBg={lightBg} >
      <InfoWrapper>
        <InfoRow imgStart={imgStart} >
          <Column1>
            <TextWrapper>
              <TopLine lightBg={lightBg} >{topLine}</TopLine>
              <Heading lightText={lightText} >{headLine}</Heading>
              <Subtitle lightTextDesc={lightTextDesc} dangerouslySetInnerHTML={{__html: description}} />
              <BtnWrapper>
                <Button
                  primary={primary}
                  dark={dark}
                  to={scrollToId}
                  href={scrollToId}
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
              <Img src={img} alt={alt} />
            </ImgWrapper>
          </Column2>
        </InfoRow>
      </InfoWrapper>
    </InfoContainer>
  )
}

