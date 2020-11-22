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
            
            <meta name="robots" content="index, follow"/>
            <meta name="description" content="Portfolio of Achraf El Ghinoussi, a Moroccan Web Developer specialized in front-end and building complete websites for businesses."/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <meta name="keywords" content="Achraf El Ghinoussi, achraf.org, web developer, reactjs, wordpress, front-end developer, designer, landing page, portfolio, achraf, ashraf, أشرف الغينوسي"/>
            <meta name="author" content="Achraf El Ghinoussi" />

            <meta property="og:type" content="Portfolio" />
            <meta property="og:title" content="Achraf El Ghinoussi's Portfolio" />
            <meta property="og:description" content="Portfolio of Achraf El Ghinoussi, a Moroccan Web Developer specialized in front-end and building complete websites for businesses." />
            <meta property="og:image" content="https://portfolio.achraf.org/_next/image?url=%2Fimages%2Fme.jpg&w=640&q=75" />
            <meta property="og:url" content="https://portfolio.achraf.org" />
            <meta property="og:site_name" content="Portfolio of Achraf El Ghinoussi" />
            
            <link rel="canonical" href="https://portfolio.achraf.org/" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
            <link href="assets/icons.css" rel="stylesheet" />
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