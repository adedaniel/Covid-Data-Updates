import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/ct-logo.png" />
          <link rel="manifest" href="/manifest.json" />
          <script dangerouslySetInnerHTML={{ __html: '</script><link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Jaldi&display=swap" media="print" onload="this.media=\'all\'" /><script>' }} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-title" content="CovidTracker" />
          <link href="/ct-logo.png" sizes="2048x2732" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1668x2224" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1536x2048" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1125x2436" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="1242x2208" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="750x1334" rel="apple-touch-startup-image" />
          <link href="/ct-logo.png" sizes="640x1136" rel="apple-touch-startup-image" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
