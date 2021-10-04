import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "utils";

export const apolloClient = new ApolloClient({
  uri: env.GQL_URL,
  cache: new InMemoryCache(),
});
