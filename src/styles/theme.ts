const defaultTheme = {
  colors:{
      gray_100: '#00000F',
      gray_200: '#343940',
      gray_300: '#697380',
      gray_400: '#9DACBF',
      gray_500: '#D1E5FF',
      gray_600: '#DAEAFF',
      gray_700: '#E4EFFF',
      gray_800: '#EDF5FF',
      gray_900: '#F6FAFF',
      gray_1000: '#F7FAFF',

      main:'#39837D',
      primary: '#39837D',
      secondary: '#AC9A52',

      alert: '#C1E6C7',
      danger: '#E60819',
      success:'#00F92A',

  },
  texts:{
    main_title:'900 3rem/4.25rem EB Garamond, serif',//h1
    title:'700 2rem/3.5rem EB Garamond, serif',//h2
    sub_title:'700 1.5rem/3rem EB Garamond, serif',//h3
    main_texts:'400 1rem/1.5rem EB Garamond, serif',//p, a ...
    main_strong:'700 1rem/1.5rem EB Garamond, serif',//strong
    small_text:'300 0.875rem/1.3125rem EB Garamond, serif'//p, a, small ..
  }
}

export type ThemeType = typeof defaultTheme
export default defaultTheme
