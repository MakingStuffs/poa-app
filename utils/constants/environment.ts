import { Environment } from "types";

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_GQL_URL } = process.env;

const env: Environment = {
  API_URL: NEXT_PUBLIC_API_URL || "http://localhost:1337",
  GQL_URL: NEXT_PUBLIC_GQL_URL || "http://localhost:1337/graphql",
};
export default env;
