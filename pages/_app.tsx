import { CustomDocument } from "components";
import { ApolloProvider } from "@apollo/client";
import client from "../lib/apollo-client";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <CustomDocument>
        <Component {...pageProps} />
      </CustomDocument>
    </ApolloProvider>
  );
}
export default MyApp;
