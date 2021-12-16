import React, { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import Link from 'next/link'

import {
  ComapnyLogo,
  DeveloperLink,
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksTitle,
  FooterLinksWrapper,
  FooterWrapper,
  SocialIconLink,
  SocialMediaWrapper,
  SociaMedia,
  SocilaIcons,
  WebsiteDeveloper,
  WebsiteRights
} from './styles'

interface FooterProps {
  children?: ReactNode
}

function Footer({ children }: FooterProps) {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinksTitle>Sobre Nós</FooterLinksTitle>
              <FooterLink
                to={'about'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                A Megic Solar
              </FooterLink>
              <FooterLink
                to={'how-we-work'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Como Atuamos
              </FooterLink>
              <FooterLink
                to={'results'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Resultados
              </FooterLink>
              <FooterLink
                to={''}
                href={`termos`}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Termos de serviços
              </FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Contate-nos</FooterLinksTitle>
              <Link href='/agenda' >
                <FooterLink
                  to={'/agenda'}
                  href={`/agenda`}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Solicite uma visita
                </FooterLink>
              </Link>
              <Link href='/agenda' >
                <FooterLink
                  to={'/agenda'}
                  href={`/agenda`}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                >
                  Tire suas Dúvidas
                </FooterLink>
              </Link>
              <FooterLink
                to={'solar-energy'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                A Energia solar
              </FooterLink>
              <FooterLink
                to={'services'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Processo de projetos
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          {/* Second Column */}
          {/* <FooterLinksWrapper>
          <FooterLinksItems>
              <FooterLinksTitle>Social</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Youtube
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Facebook
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Instagram
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Linked In
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Twitter
              </FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Services</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 1
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 2
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 3
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Service 4
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Terms of service with some long text, but not long enaought;
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper> */}

        </FooterLinksContainer>
        <SociaMedia>
          <SocialMediaWrapper>
            {/* Create logic to handle to redirect to home in diferent paths
              - use a commun anchor instead;
            */}
            <ComapnyLogo
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
            >
              Magic Solar
            </ComapnyLogo>
            <WebsiteRights>Magic Solar ® {new Date().getFullYear()} Todos os direitos reservados </WebsiteRights>
            <SocilaIcons>
              <SocialIconLink href="/#" target="_blank" aria-label="Facebook" > <FaFacebook /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" aria-label="Instagram" > <FaInstagram /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" aria-label="YouTube" > <FaYoutube /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" aria-label="Twitter" > <FaTwitter /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" aria-label="LinkedIn" > <FaLinkedin /> </SocialIconLink>
            </SocilaIcons >
          </SocialMediaWrapper>
          <WebsiteDeveloper>
            Made with 💚  by: <DeveloperLink href="https://www.johnnycarreiro.com" target="_blank" aria-label="JohnnyCarreiro">
              Johnny Carreiro
            </DeveloperLink>
          </WebsiteDeveloper>
        </SociaMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
