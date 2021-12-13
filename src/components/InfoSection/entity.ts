export type InfoSectionProps = {
  id: string
  lightBg: boolean
  lightText: boolean
  lightTextDesc: boolean
  topLine: string
  headLine: string
  description: string
  buttonLabel: string
  imgStart: boolean
  img: {
    height: number
    src: string
    width: number
  }
  alt: string
  dark: boolean
  primary: boolean
  darkText: boolean
}
