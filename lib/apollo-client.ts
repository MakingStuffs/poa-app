import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "constants/index";

const client = new ApolloClient({
  uri: env.API_URL,
  cache: new InMemoryCache(),
});

export default client;
