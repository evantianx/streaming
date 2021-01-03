import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { themeDark } from "lib/theme"
import { useEffect } from "react"

const app = ({ Component, pageProps }) => {
  useEffect(() => {
    // remove the server-side injected CSS
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }, [])

  return (
    <ThemeProvider theme={themeDark}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default app
