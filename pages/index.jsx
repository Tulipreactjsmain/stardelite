"use client";

import Head from "next/head";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import BgSlides from "react-bootstrap/Carousel";

const inter = Inter({ subsets: ["latin"] });
const images = [
  "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",

  "https://res.cloudinary.com/techbro/image/upload/v1700832852/Frame_1_ryctrp.svg",
  "https://res.cloudinary.com/techbro/image/upload/v1700739951/unsplash_Xk4hnBZHHZ0_azpwb1.svg",
  "https://res.cloudinary.com/techbro/image/upload/v1700738619/unsplash_DBGb9u1Yf6Q_zham6v.svg",
  "https://res.cloudinary.com/techbro/image/upload/v1700832853/Rectangle_3_gyva6x.svg",
  "https://res.cloudinary.com/techbro/image/upload/v1700832855/Rectangle_4_nr5rqr.svg",
  "https://res.cloudinary.com/techbro/image/upload/v1700832824/Pexels_Photo_by_Gantas_Vaic%CC%8Ciule%CC%87nas_vkcm6c.svg",
];

export default function Home() {
  const [backgroundImage, setBackgroundImage] = useState(images[0]);

  useEffect(() => {
    const image = new Image();
    image.src = images[1];
    image.onload = () => {
      setBackgroundImage(image.src);
    };
    return () => {
      image.onload = null;
    };
  }, []);

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
          className="w-100 bg-black position-relative"
          style={{
            height: "100vh",
          }}
        >
          <BgSlides
            fade
            controls={false}
            indicators={false}
            className="Hero-BG"
          >
            <BgSlides.Item className="Hero-BG">
              <div
                className="Hero-BG"
                style={{ backgroundImage: `url('${backgroundImage}')` }}
              ></div>
            </BgSlides.Item>
            <BgSlides.Item className="Hero-BG">
              <div
                className="Hero-BG"
                style={{ backgroundImage: `url('${images[2]}')` }}
              ></div>
            </BgSlides.Item>
            <BgSlides.Item className="Hero-BG">
              <div
                className="Hero-BG"
                style={{ backgroundImage: `url('${images[5]}')` }}
              ></div>
            </BgSlides.Item>
            <BgSlides.Item className="Hero-BG">
              <div
                className="Hero-BG"
                style={{ backgroundImage: `url('${images[4]}')` }}
              ></div>
            </BgSlides.Item>
          </BgSlides>
          <div className="heroContent text-white">
            <div className="d-flex justify-content-center fs-1 align-items-center w-100 h-100">
              <h1 className="text-center" style={{fontSize:"60px"}}>Software <span>Consulting</span> and <br />Development</h1>
            </div>
          </div>
        </section>
        <section style={{ width: "50px", height: "500px" }}></section>
      </main>
    </>
  );
}
