import { InfoSectionProps } from './entity'
import { Button } from '../Button/ButtonElements'

import {
   AddressIcon,
   BtnWrapper,
   Column1,
   Column2,
   ContactItem,
   EmailIcon,
   Heading,
   Img,
   ImgWrapper,
   InfoContainer,
   InfoRow,
   InfoWrapper,
   PhoneIcon,
   Subtitle,
   TextWrapper,
   TopLine
} from './styles'

export const ContactSection:React.FC<InfoSectionProps> = (infoSectionProps) => {
  const {
    id,
    lightBg,
    lightText,
    lightTextDesc,
    topLine,
    headLine,
    description,
    phone,
    email,
    address,
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
              <ContactItem
                href={`callto: ${phone}`}
                target="_blank"
              >
                <PhoneIcon />{phone}
              </ContactItem>
              <ContactItem
                href={`mailto: ${email}`}
                target="_blank"
              >
                <EmailIcon />{email}
              </ContactItem>
              <ContactItem
                href={`https://goo.gl/maps/2GrZzeFdesDNbAuz8`}
                target="_blank"
              >
                <AddressIcon />{address}
              </ContactItem>
              {/* <BtnWrapper>
                <Button
                  primary={primary}
                  dark={dark}
                  to={scrollToId}
                  href={scrollToId}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  {buttonLabel}
                </Button>
              </BtnWrapper> */}
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

