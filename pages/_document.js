import { Html, Head, Main, NextScript } from 'next/document'

import { siteMeta } from 'lib/constants'
const { siteLang } = siteMeta

export default function Document() {
  return (
    <Html lang={siteLang}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
