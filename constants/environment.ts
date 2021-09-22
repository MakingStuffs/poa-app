import { Environment } from "types";

const { NEXT_PUBLIC_API_URL } = process.env;

const env: Environment = {
  API_URL: NEXT_PUBLIC_API_URL || "http://localhost:1337",
};
export default env;
