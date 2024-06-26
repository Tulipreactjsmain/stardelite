import "../sass/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeadMetaData, Footer } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadMetaData />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
