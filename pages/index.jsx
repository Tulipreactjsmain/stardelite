import Head from "next/head";
import gsap from "gsap";
import { useRef, useEffect, use } from "react";
import { Inter } from "next/font/google";
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "@/sass/Home.module.scss";
import { BackgroundSlides, MediaIcons } from "@/components";
import gsapEffects from "@/utils/gsapEffects";
import Lenis from "@studio-freight/lenis";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  gsap.registerPlugin(TextPlugin);
  const DOM_REF = useRef(null);
  gsapEffects(DOM_REF);

  useEffect(() => {
    const lenis = new Lenis();

    lenis.on("scroll", (e) => {
      console.log(e);
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
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
      <main className={`${styles.main} ${inter.className}`} ref={DOM_REF}>
        <section className="w-100 bg-black position-relative hero-section">
          <BackgroundSlides />
          <div className="heroContent text-white container-fluid">
            <div className="position-relative px-2 px-md-5 px-lg-5 w-100 h-100">
              <div
                className="d-flex flex-column justify-content-md-center align-items-md-center align-items-lg-center fs-1 px-2 px-md-5 px-lg-5 heroH1 w-100"
                style={{ flexWrap: "wrap" }}
              >
                <h1
                  className="text-md-center text-lg-center"
                  style={{ fontSize: "50px" }}
                >
                  Software <span className="shining-text">Solutions</span> and{" "}
                  <br />
                  Engineering
                </h1>
                <p
                  className="fs-6 mt-4 text-md-center typing-texts"
                  style={{ maxWidth: "40rem" }}
                >
                  "Reach for the stars with Stardelite – your innovation
                  partners.<span className="heroDescription"></span>
                  <span className="textCursor">|</span>
                </p>
              </div>
              <MediaIcons />
            </div>
          </div>
        </section>
        <section className="w-100" style={{ height: "100vh" }}></section>
      </main>
    </>
  );
}
