import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@ktsnowy_" />
        <meta property="og:url" content="https://www.ktsnowy.com/" />
        <meta property="og:title" content="KTSnowy" />
        <meta property="og:description" content="Keith Taylor's Portfolio" />
        <meta property="og:image" content="https://www.ktsnowy.com/banner.png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}