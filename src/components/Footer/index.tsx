import React, { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

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
              <FooterLinksTitle>About Us</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                How it works
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Testimonial
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Careers
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Investors
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Terms of service
              </FooterLink>
            </FooterLinksItems>

            <FooterLinksItems>
              <FooterLinksTitle>Contact Us</FooterLinksTitle>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Contact
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Address
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Support
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Destination
              </FooterLink>
              <FooterLink
                to={'home'}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Sporsorships
              </FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          {/* Second Column */}
          <FooterLinksWrapper>
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
          </FooterLinksWrapper>

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
              ConsoliDados
            </ComapnyLogo>
            <WebsiteRights>ConsoliDados © {new Date().getFullYear()} All Rights Reserved </WebsiteRights>
            <SocilaIcons>
              <SocialIconLink href="/#" target="_blank" area-label="Facebook" > <FaFacebook /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" area-label="Instagram" > <FaInstagram /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" area-label="YouTube" > <FaYoutube /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" area-label="Twitter" > <FaTwitter /> </SocialIconLink>
              <SocialIconLink href="/#" target="_blank" area-label="LinkedIn" > <FaLinkedin /> </SocialIconLink>
            </SocilaIcons >
          </SocialMediaWrapper>
          <WebsiteDeveloper>
            Made with  💚  by: <DeveloperLink href="https://www.johnnycarreiro.com" target="_blank" area-label="JohnnyCarreiro">
              Johnny Carreiro
            </DeveloperLink>
          </WebsiteDeveloper>
        </SociaMedia>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
