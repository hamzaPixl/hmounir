import { Html, Head, Main, NextScript } from 'next/document';
import Document, { DocumentContext, DocumentInitialProps } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" className="">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />

          <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
          <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
          <meta
            name="description"
            content="Hamza Mounir - Senior Software Engineer specializing in scalable systems, cloud architecture, AI systems, and technical leadership. Brussels, Belgium."
          />
          <meta
            name="keywords"
            content="software engineer, cloud architecture, AI systems, scalable platforms, TypeScript, Python, React, Next.js, microservices, Brussels, Belgium, Pixl SRL"
          />
          <meta name="author" content="Hamza Mounir" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Hamza Mounir | Senior Software Engineer - Brussels" />
          <meta
            property="og:description"
            content="Senior Software Engineer specializing in scalable systems, cloud architecture, AI systems, and technical leadership."
          />
          <meta property="og:site_name" content="Hamza Mounir" />
          <meta property="og:image" content="https://hmounir.com/og-image.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Hamza Mounir | Senior Software Engineer - Brussels" />
          <meta
            name="twitter:description"
            content="Senior Software Engineer specializing in scalable systems, cloud architecture, AI systems, and technical leadership."
          />
          <meta name="twitter:image" content="https://hmounir.com/twitter-image.jpg" />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/favicon/apple-touch-icon-180x180.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <meta name="msapplication-TileColor" content="#000000" />
          <meta name="msapplication-TileImage" content="/favicon/mstile-144x144.png" />
        </Head>
        <body>
          {/* Prevent dark mode flash */}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})()`,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
