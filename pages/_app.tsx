import App from "next/app"
import CssBaseline from "@material-ui/core/CssBaseline"
import { ThemeProvider } from "@material-ui/core/styles"
import { themeDark } from "lib/theme"

const app = ({ Component, pageProps }) => (
  <ThemeProvider theme={themeDark}>
    <CssBaseline />
    <Component {...pageProps} />
  </ThemeProvider>
)

export default app
