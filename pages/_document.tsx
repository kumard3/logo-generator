import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";


class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com"  />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="bg-indigo-500">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
