import Layout from "components/layout";
import type { AppProps } from "next/app";
import GlobalStyle from "styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        href="http://yui.yahooapis.com/3.11.0/build/cssnormalize/cssnormalize-min.css"
      />
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
