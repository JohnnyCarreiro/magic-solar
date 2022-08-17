import styled from 'styled-components'
import Image from 'next/image'

type ContainerProps = {
  lightBg?: boolean;
}
type RowProps = {
  imgStart?: boolean;
}
type HeadingProps = {
  lightText?: boolean;
}
type SubtitleProps = {
  lightTextDesc?: boolean;
}

export const InfoContainer = styled.div<ContainerProps>`
  background: ${({lightBg = false, theme}) => (lightBg ? theme.colors.grey_900 : theme.colors.grey_300)};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 24px;
  justify-content:center;
`
export const InfoRow = styled.div<RowProps>`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({imgStart = false}) => (imgStart ? `'col2 col1'` : `'col1 col2'` )};
  /* grid-template-areas: ${({imgStart = false}) => (imgStart ? `'col2 col1 col1'` : `'col1 col1 col2'` )}; */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart = false}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'` )};
  }
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`
export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`
export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;
`
export const TopLine = styled.p<ContainerProps>`
  color:${({lightBg = false,theme}) => (lightBg ? theme.colors.main_brand : theme.colors.secondary_brand)};
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`
export const Heading = styled.h2<HeadingProps>`
  margin-top: 16px;
  font-size: 3rem;
  line-height: 1.1;
  font-weight: 600;
  color: ${({lightText = false, theme}) => (lightText ? theme.colors.grey_900 : theme.colors.grey_100)};

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const Subtitle = styled.div<SubtitleProps>`
  max-width: 440px;
  margin: 16px 0 35px 0;
  font-size: 1.125rem;
  line-height: 1.5rem;
  color: ${({lightTextDesc = false, theme}) => (lightTextDesc ? theme.colors.grey_900 : theme.colors.grey_100)};
`
export const BtnWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`
export const ImgWrapper =styled.div`
  max-width: 555px;
  height: 100%;
`
export const Img =styled(Image)`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`
