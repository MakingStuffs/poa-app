import { ServerStyleSheet } from "styled-components";
import { CustomDocument } from "components";
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";

class PoaApp extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const sheet = new ServerStyleSheet();
    const originalRender = ctx.renderPage;
    try {
      // Use the original render function to enhance the app
      originalRender({
        // Pass our collected styles to the enhancer function
        enhanceApp: (App: any) => (props: any) =>
          sheet.collectStyles(<App {...props} />),
      });
      // Return our initial props and new stylesheet
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (e) {}
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PoaApp;
