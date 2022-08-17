import styled from 'styled-components'

export const Container = styled.div<{primaryColor:boolean}>`
  .primary{
    background-color:${({primaryColor})=> primaryColor
      ? ({theme})=> theme.colors.secondary_brand
      : ({theme})=> theme.colors.main_brand };
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    text-align:center;
    border-radius:50px;
    margin-top:2.5rem;
    padding:0.5rem 2rem;
    transition:.2s;
    cursor:pointer;
    border: 2px solid transparent;
    a{
      text-align:center;
      color:${({theme})=>theme.colors.main_brand};
      font: ${({theme}) => theme.texts.main_strong};
      line-height: 1.75rem;
      text-transform: uppercase;
    }
    span{
      text-align:center;
      color:${({theme})=>theme.colors.main_brand};
      font: ${({theme}) => theme.texts.main_strong};
      line-height: 1.75rem;
      text-transform: uppercase;
    }
  }
  .primary:hover{
      background:transparent;
      border: 2px solid ${({primaryColor})=> primaryColor
        ? ({theme})=> theme.colors.secondary_brand
        : ({theme})=> theme.colors.main_brand };
      a{
        color:${({primaryColor})=> primaryColor
          ? ({theme})=> theme.colors.secondary_brand
          : ({theme})=> theme.colors.main_brand };
      }
      span{
        color:${({primaryColor})=> primaryColor
          ? ({theme})=> theme.colors.secondary_brand
          : ({theme})=> theme.colors.main_brand };
      }
    }
  .secondary_brand{
    background:transparent;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    text-align:center;
    border: 2px solid ${({primaryColor})=> primaryColor
      ? ({theme})=> theme.colors.secondary_brand
      : ({theme})=> theme.colors.main_brand };
    border-radius:50px;
    padding:0.5rem 2rem;
    margin-top:2.5rem;
    transition:0.2s;

    a{
      text-align:center;
      color:${({primaryColor})=> primaryColor
        ? ({theme})=> theme.colors.secondary_brand
        : ({theme})=> theme.colors.main_brand };
      font: ${({theme}) => theme.texts.main_strong};
      line-height: 1.75rem;
      text-transform: uppercase;
    }
    span{
      text-align:center;
      color:${({primaryColor})=> primaryColor
        ? ({theme})=> theme.colors.secondary_brand
        : ({theme})=> theme.colors.main_brand};
      font: ${({theme}) => theme.texts.main_strong};
      line-height: 1.75rem;
      text-transform: uppercase;
    }
  }
  .secondary:hover{
    background:${({primaryColor})=> primaryColor
      ? ({theme})=> theme.colors.primary
      : ({theme})=> theme.colors.secondary };
    opacity:0.7;
    a{
      color:${({primaryColor})=> primaryColor
        ? ({theme})=> theme.colors.grey_1000
        : ({theme})=> theme.colors.grey_1000 };
    }
    span{
      color:${({primaryColor})=> primaryColor
        ? ({theme})=> theme.colors.grey_1000
        : ({theme})=> theme.colors.grey_1000 };
    }
  }
  button:disabled,
  button[disabled]{
    opacity: 0.6;
    cursor: default;

    :hover {
      background: transparent;
      color:${({theme})=> theme.colors.primary};
      opacity: 0.6;
      > * {
        color:${({theme})=> theme.colors.primary};
      }
    }
  }
`
