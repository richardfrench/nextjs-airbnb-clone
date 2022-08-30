import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

const COOKIE_DOMAIN_ID = process.env.NEXT_PUBLIC_COOKIE_DOMAIN_ID || "";

const ENV_NAME = process.env.NEXT_PUBLIC_ENV_NAME || "";
export default class MyDocument extends Document {
  isDev = ENV_NAME === "development";

  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  //  I would love to not use dangerouslySetInnerHTML
  // but due to the requirement enforce GTM before cookie banner before any other script it's not possible
  // also self closing script tags aren't allowed
  /* eslint-disable react/no-danger, react/self-closing-comp */
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
  /* eslint-enable */
}
