import type { AppProps } from "next/app";
import GlobalStyle from "styles/global";
import "../../public/normalize.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
