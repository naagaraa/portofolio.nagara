import '../styles/globals.css'
import '../styles/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  //  useEffect(() => {
  //   import("bootstrap/dist/js/bootstrap");
  // }, []);
  
  // # this for jquery
  // useEffect(() => {
  //   import("jquery/dist/jquery.min.js");
  // }, []);

  useEffect(() => {
    typeof document !== undefined
      ? require("bootstrap/dist/js/bootstrap")
      : null;
  }, []);
  return <Component {...pageProps} />
}

export default MyApp
