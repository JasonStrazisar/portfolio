import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "../components";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
