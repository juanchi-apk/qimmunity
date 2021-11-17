import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react';
import { ServerStyleSheets } from '@mui/styles';
import { ServerStyleSheet } from "styled-components";


export default class MyDocument extends Document {
    render() {
      return (
        <Html lang="en">
        <Head>
        <title>Qimmunity Marketing Dev</title>
        <meta name="description" content=" Armamos tu páginas Web o Landing Page – Especialistas en Marketing para profesionales, emprendedores, y empresas. Implementacion de Ecommerce, Desarrollo de tienda Virtual, aplicaciones moviles." />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@900&display=swap');
        
        `}</style>
      </Html>
    );
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const sheetStyled = new ServerStyleSheet();

  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheetStyled.collectStyles(sheets.collect(<App {...props} />))

    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
  };
};