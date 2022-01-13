import { useState } from 'react'
import { NavBar } from '../components/NavBar'
import { SwitchTheme } from '../components/SwitchTheme'

import { ThemeProvider } from 'styled-components'
import { dark, GlobalStyle, light } from '../theme'

function MyApp ({ Component, pageProps }) {
  const [theme, setTheme] = useState('dark')
  return (
    <ThemeProvider theme={theme === 'light' ? light : dark}>
      <GlobalStyle/>
      <NavBar theme={theme}>
        <SwitchTheme theme={theme} setTheme={setTheme}/>
      </NavBar>
      <Component {...pageProps} theme={theme}/>
    </ThemeProvider>

  )
}

export default MyApp
