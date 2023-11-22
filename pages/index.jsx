import Head from "next/head";
import Image from "next/image";
import { Layout } from "@/components";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stardelite- Elevate Your Ideas, Reach for the Stars</title>
        <meta
          name="description"
          content="Elevate your ideas and reach for the 
          
          
          stars with Stardelite. We are more than a software development company; we're your partners in innovation. Transform your vision into reality through cutting-edge technology and personalized solutions. Join a community of dreamers and achievers. Let's propel your business to new heights together!"
        />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <section
          className="w-100 bg-black overlay"
          style={{
            height: "100vh",
          }}
        >
          <div
            className="Hero-BG w-100 p-0 m-0 slide-in-blurred-top"
            style={{
              height: "100vh",
            }}
          ></div>

        </section>
      </main>
    </>
  );
}
