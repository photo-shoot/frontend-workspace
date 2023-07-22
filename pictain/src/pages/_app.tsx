import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../../src/pages/commons/styles/globalStyles";
import Layout from "../../src/pages/commons/layout";
// import ApolloSetting from "../src/components/commons/apollo";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ApolloSetting>
    <>
      <Global styles={globalStyles} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
    // </ApolloSetting>
  );
}

export default MyApp;
