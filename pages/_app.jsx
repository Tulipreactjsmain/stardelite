import "@/styles/globals.css";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { HeadMetaData, Layout, Navbar } from "@/components";
import { IntercomProvider } from "@/utils/IntercomProvider";

export default function App({ Component, pageProps }) {
  return (
    <>
      <HeadMetaData />
      <Layout>
        <Navbar />
        <IntercomProvider>
        <Component {...pageProps} />
        </IntercomProvider>
       
      </Layout>
    </>
  );
}
