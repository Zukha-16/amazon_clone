import { Html, Head, Main, NextScript } from 'next/document'
// Custom components
import Header from "@/components/Header";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
