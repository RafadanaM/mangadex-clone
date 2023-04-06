import "swiper/css";
import "@Styles/globals.css";
import "@Styles/titleCard.css";
import type { AppProps } from "next/app";
import Layout from "@Common/components/layout/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
