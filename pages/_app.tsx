import { ThemeProvider } from "styled-components";
import { defaultTheme, GlobalStyle } from "../components";
import { AppProps } from "../node_modules/next/app";

function MyApp({ Component, pageProps }: AppProps) {
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
