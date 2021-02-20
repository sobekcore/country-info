import "../styles/css/index.css";
import Head from "next/head";

function App({ Component, pageProps })
{
  return(
    <>
      <Head>
        <title>Country Info</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
