import "../sass/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeadMetaData, Layout, Navbar } from "@/components";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadMetaData />
      <Layout>
        <Navbar />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
