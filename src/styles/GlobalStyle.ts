import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing:border-box;
    margin: 0;
    outline:none;
    padding:0;
  }


  html{
    @media (max-width: 1080px){
      font-size:93.75%;
    }
    @media (max-width: 720px){
      font-size:87.5%;
    }
    font-family: 'EB Garamond', serif;
  }

  body{
    background:${({theme}) => theme.colors.grey_900};
    color: ${({theme}) => theme.colors.grey_100};
  }

  body, input, textarea, select, button{
    color: ${({theme}) => theme.colors.grey_100};
    font: 400 1rem 'EB Garamond', serif;
  }
  span, small {
    color: ${({theme}) => theme.colors.grey_100};
    font: 400 0.875rem 'EB Garamond', serif;
  }
  strong {
    color: ${({theme}) => theme.colors.grey_100};
    font: 600 1rem 'EB Garamond', serif;
  }

  button{
    cursor:pointer;
  }

  a{
    color:inherit;
    text-decoration: none;
    font: 400 1rem 'EB Garamond', serif;
  }

`
