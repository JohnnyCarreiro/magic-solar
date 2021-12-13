import styled from 'styled-components'
import Image from 'next/image'

export const ServicesContainer = styled.section`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`
export const ServicesMainHeading = styled.h2`
  font-size: 2.5rem;
  color: #fff;
  font-weight: 900;
  margin-bottom: 64px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`
export const ServicesWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`
export const ServiceCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
  }
`
export const ServiceIcon = styled(Image)`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`
export const ServiceHeading = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 10px;
  margin-top: 10px;
  color: #010606;
`
export const ServiceDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 10px;
  color: #010606;
`
