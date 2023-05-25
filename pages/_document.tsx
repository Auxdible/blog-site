import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang='en'>
          <Head>
            <link rel='icon' type="image/x-icon" href='/favicon.ico' />
            <meta property="og:title" content="Auxdible's Blog"/>
            <meta property="og:site_name" content="Auxdible"/>
            <meta property="og:url" content={process.env.NEXTAUTH_URL}/>
            <meta property="og:description" content="Auxdible's official blog site."/>
            <meta property="og:type" content="website"/>
            <meta property="og:image" content="/images/ICON.png"/>

          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
}