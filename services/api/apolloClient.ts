import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "utils/constants/index";

const client = new ApolloClient({
  uri: env.GQL_URL,
  cache: new InMemoryCache(),
});

export default client;
