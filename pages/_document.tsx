import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Preconnect to domains */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

          {/* Preload critical fonts */}
          <link
            rel="preload"
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            as="style"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          {/* Meta tags for SEO */}
          <meta name="theme-color" content="#5DD170" />
          <meta name="description" content="Hamza Mounir - Senior Software Engineer specializing in scalable systems, cloud & microservices, and business-critical solutions." />
          <meta name="keywords" content="software engineer, developer, cloud, microservices, scalable systems, TypeScript, JavaScript, NestJS" />
          <meta name="author" content="Hamza Mounir" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hamza Mounir | Senior Software Engineer" />
          <meta property="og:description" content="Senior Software Engineer specializing in scalable systems, cloud & microservices, and business-critical solutions." />
          <meta property="og:site_name" content="Hamza Mounir Portfolio" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:title" content="Hamza Mounir | Senior Software Engineer" />
          <meta property="twitter:description" content="Senior Software Engineer specializing in scalable systems, cloud & microservices, and business-critical solutions." />

          {/* Favicon */}
          <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-touch-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/favicon/apple-touch-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/favicon/apple-touch-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/favicon/apple-touch-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/favicon/apple-touch-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/favicon/apple-touch-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/favicon/apple-touch-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/favicon/apple-touch-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon-180x180.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#5DD170" />
          <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
