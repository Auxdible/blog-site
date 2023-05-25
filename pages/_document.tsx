import { DocumentInitialProps, Head, Html, Main, NextScript } from "next/document";

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
            <script
            dangerouslySetInnerHTML={{
              __html: `
                (function() {
                  var storageKey = 'dark';
                  var classNameDark = 'dark';
                  var classNameLight = 'light';
                  var d = document.querySelector('html');
                  function setClassOnDocumentBody(dark) {
                    d.classList.add(dark ? classNameDark : classNameLight);
                    d.classList.remove(dark ? classNameLight : classNameDark);
                  }
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else {
                    var isDarkMode = d.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `,
            }}
          />
          </Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Html>
      );
}
