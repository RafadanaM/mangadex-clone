import "../styles/globals.css";
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
