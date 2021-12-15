export type InfoSectionProps = {
  id: string
  lightBg: boolean
  lightText: boolean
  lightTextDesc: boolean
  topLine: string
  headLine: string
  description: string
  imgStart: boolean
  img: {
    height: number
    src: string
    width: number
  }
  alt: string
  buttonLabel: string
  scrollToId: string
  dark: boolean
  primary: boolean
}
