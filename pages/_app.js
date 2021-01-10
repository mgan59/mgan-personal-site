import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { THEME } from '../themeConstants'

// To activate GA & Router
import Router from 'next/router'
import withGA from 'next-ga'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

// pass your GA code as first argument
const appComposedWithGA = withGA(process.env.NEXT_PUBLIC_GA, Router)(MyApp)

export default appComposedWithGA
