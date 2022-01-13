import { createGlobalStyle } from 'styled-components'

export const dark = {
  body: '#07090F',
  text: '#FAFAFA',
  toggleTheme: '#8B94A3'
}

export const light = {
  body: '#F8F9FA',
  text: '#07090F',
  toggleTheme: '#FFF'
}

export const colors = {
  primary: '#97ce4c',
  secundary: '#E89242FF'
}
export const GlobalStyle = createGlobalStyle`
    html,
    body {
    padding: 0;
    margin: 0;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans,  sans-serif;
    transition: all 200ms linear;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }
    
  `
