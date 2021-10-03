import { CustomDocument } from "components";
import { ApolloProvider } from "@apollo/client";
import { apolloClient } from "services";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <CustomDocument>
        <Component {...pageProps} />
      </CustomDocument>
    </ApolloProvider>
  );
}
export default MyApp;
