import "../styles/css/index.css";
import Head from "next/head";

function App({ Component, pageProps })
{
  return(
    <>
      <Head>
        <title>Life Quality</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
