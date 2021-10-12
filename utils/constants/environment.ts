import { Environment } from "types";

const env: Environment = {
  API_URL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337",
  GQL_URL: process.env.NEXT_PUBLIC_GQL_URL || "http://localhost:1337/graphql",
  GTAG_UID: process.env.NEXT_PUBLIC_GTAG_UID || "UA-000000",
};
export default env;
