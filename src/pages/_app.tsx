import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import { GlobalStyle } from 'styles/GlobalStyle'
import Navbar from '@/components/Navbar'
import { Sidebar } from '@/components/Sidebar'
import Footer from '@/components/Footer'

interface MyAppProps extends AppProps {}

export default function MyApp({Component, pageProps}:MyAppProps){
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

    return(
        <ThemeProvider theme={theme} >
          <Navbar toggle={toggle} />
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Component { ...pageProps }/>
          <GlobalStyle />
          <Footer />
        </ThemeProvider>
    )
}
