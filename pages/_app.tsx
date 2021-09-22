import { CustomDocument } from "components";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CustomDocument>
      <Component {...pageProps} />
    </CustomDocument>
  );
}
export default MyApp;
