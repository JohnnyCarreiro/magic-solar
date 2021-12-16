import styled from 'styled-components'
import { Link as LinkS } from 'react-scroll'

export const FooterContainer = styled.footer`
  background-color: #101522;
`
export const FooterWrapper = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1100px;
  margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;

    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    @media screen and (max-width: 820px) {
      grid-template-columns: 1fr;
  }
  }
`
export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
}
`
export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 480px) {
    margin:0;
    padding: 10px;
    width: 100%;
    max-width: 160px;

    align-items: center;
  }
`
export const FooterLinksTitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 16px;
`
export const FooterLink = styled(LinkS)`
  color: #fff;
  margin-bottom: 0.75rem;
  font-size: 1rem;
  transition: all 0.3s ease-out;
  max-width: 160px;

  &:hover {
    color: #39837D;
    cursor: pointer;
    transition: all 0.3s ease-out
  }
`
export const SociaMedia = styled.div`
  max-width: 1100px;
  width: 100%;
  display:flex;
  flex-direction:column;
  align-items: center;
`
export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  width: 100%;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`
export const ComapnyLogo = styled(LinkS)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: 900;
`
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`
export const SocilaIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;

  @media screen and (max-width:780px) {
    width: 340px;
  }
`
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 1.5rem;
  transition: all 0.3s ease-out;
  line-height: 1rem;

  &:hover {
    color: #39837D;
    transition: all 0.3s ease-out;
  }
  @media screen and (max-width:780px) {
    font-size: 3.5rem;
  }
`
export const WebsiteDeveloper = styled.small`
  color: #fff;
  width: 100%;
  margin: 32px auto 0 auto;
  /* text-align: center; */
`
export const DeveloperLink = styled.a`
  color: #39837D;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    cursor: pointer;
  }
`
