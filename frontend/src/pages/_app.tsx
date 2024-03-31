import type { AppProps } from "next/app";

import NavBar from "@/components/app-bar";
import "@/styles/globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      <div style={{ margin: '20px' }}>
        <Component {...pageProps} />
      </div>
    </>
  );
}
