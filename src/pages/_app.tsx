import type { AppProps } from "next/app";
import { GlobalStyle } from "../styles/globals";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
