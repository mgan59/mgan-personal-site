import '../styles/globals.css'
import { ThemeProvider } from 'styled-components'

import { THEME } from '../themeConstants'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>

  )
}

export default MyApp
