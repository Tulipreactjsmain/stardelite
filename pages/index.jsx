import Head from "next/head";
import { useRef, useEffect, useState } from "react";
import { Inter } from "next/font/google";
import styles from "@/sass/Home.module.scss";
import {
  BackgroundSlides,
  MediaIcons,
  Navbar,
  ContentBackground,
  Technologies,
  Layout,
  Services,
  About,
} from "@/components";
import gsapEffects from "@/utils/gsapEffects";
import Lenis from "@studio-freight/lenis";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [heroBottomIsTop, setHeroBottomIsTop] = useState(false);
  const DOM_REF = useRef(null);
  gsapEffects(DOM_REF);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time) {
      lenis.raf(time);
      ScrollTrigger.update();
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const isTop = window.scrollY >= heroBottom;
        setHeroBottomIsTop(isTop);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
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
      <main className={`${styles.main} `} ref={DOM_REF}>
        <Navbar heroBottomIsTop={heroBottomIsTop} />
        <section className="w-100 bg-black position-relative hero-section">
          <BackgroundSlides />
          <div className="heroContent text-white ">
            <Layout>
              <div
                className="d-flex flex-column justify-content-md-center align-items-md-center align-items-lg-center fs-1 px-2 px-md-5 px-lg-5 heroH1 w-100"
                style={{ flexWrap: "wrap" }}
              >
                <h1
                  className="text-md-center text-lg-center"
                  style={{ fontSize: "3.125rem", fontWeight: "bold" }}
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
            </Layout>
          </div>
        </section>
        <section
          className="w-100 position-relative"
          style={{ height: "6218px" }}
        >
          <Layout>
            <ContentBackground />
            <div className="page-content position-absolute w-100 explicitPosition layout-padding">
              <Technologies />
              <Services />
              <About />
            
            </div>
          </Layout>
        </section>
      </main>
    </>
  );
}
