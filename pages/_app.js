import "@/styles/globals.css";
import { HeadMetaData, Navbar } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadMetaData />
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}
