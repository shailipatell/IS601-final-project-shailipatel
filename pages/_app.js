import '../styles/global.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap" rel="stylesheet" />
      </Head> */}
      <Component {...pageProps} />
    </>
  );
}