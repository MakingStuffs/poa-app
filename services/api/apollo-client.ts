import { ApolloClient, InMemoryCache } from "@apollo/client";
import { env } from "utils/constants/index";

const client = new ApolloClient({
  uri: `http://localhost:1337/graphql`,
  cache: new InMemoryCache(),
});

export default client;
