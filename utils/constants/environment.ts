import { Environment } from "types";

const { NEXT_PUBLIC_API_URL, NEXT_PUBLIC_GQL_URL, NEXT_PUBLIC_GTAG_UID } =
  process.env;

const env: Environment = {
  API_URL: NEXT_PUBLIC_API_URL || "http://localhost:1337",
  GQL_URL: NEXT_PUBLIC_GQL_URL || "http://localhost:1337/graphql",
  GTAG_UID: NEXT_PUBLIC_GTAG_UID || "UA-000000",
};
export default env;
