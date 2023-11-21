import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stardelite- Elevate Your Ideas, Reach for the Stars</title>
        <meta
          name="description"
          content="Elevate your ideas and reach for the stars with Stardelite. We are more than a software development company; we're your partners in innovation. Transform your vision into reality through cutting-edge technology and personalized solutions. Join a community of dreamers and achievers. Let's propel your business to new heights together!"
        />
      </Head>
      <Layout>
        <main className={`${styles.main} ${inter.className}`}></main>
      </Layout>
    </>
  );
}
