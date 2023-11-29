import Head from "next/head";
import gsap from "gsap";
import { useRef } from "react";
import React, { useEffect, useState } from "react";
import { Inter } from "next/font/google";
import { TextPlugin } from "gsap/dist/TextPlugin";
import styles from "@/styles/Home.module.css";
import BgSlides from "react-bootstrap/Carousel";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Link from "next/link";

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
  gsap.registerPlugin(TextPlugin);
  const iconComponent = useRef(null);
  const div = useRef();
  const cursor = useRef();
  useEffect(() => {
    gsap.to(cursor.current, {
      opacity: 0,
      ease: "power2.inOut",
      repeat: -1,
    });
    gsap.to(div.current, {
      duration: 10,
      text: "Transform your vision into reality with cutting-edge tech and personalized solutions.",
      ease: "none",
    });
    let ctx = gsap.context(() => {
      gsap.from(".Ig", {
        rotation: "360",
        delay: 2,
        y: -50,
        x: 10,
        duration: 1,
      });

      gsap.to(".Li", {
        rotation: "360",
        delay: 2,
        y: -50,
        x: 10,
        duration: 1,
      });
      gsap.to(".Tw", {
        rotation: "360",
        delay: 2,
        y: -40,
        x: 30,
        duration: 1,
      });
    }, iconComponent);
    return () => ctx.revert();
  }, []);

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
          className="w-100 bg-black position-fixed"
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
          <div className="heroContent text-white ">
            <div className="position-relative px-2 px-md-5 px-lg-5 w-100 h-100">
              <div className="d-flex flex-column justify-content-md-center fs-1 px-2 px-md-5 px-lg-5 heroH1">
                <h1
                  className="text-md-center text-lg-center"
                  style={{ fontSize: "50px" }}
                >
                  Software <span className="shining-text">Solutions</span> and{" "}
                  <br />
                  Engineering
                </h1>
                <p className="fs-6 mt-4 text-md-center typing-texts">
                  "Reach for the stars with Stardelite – your innovation
                  partners.<span ref={div}></span>
                  <span className="cursor" ref={cursor}>
                    |
                  </span>
                </p>
                <div
                ref={iconComponent}
                className="d-flex gap-3 text-white position-absolute bottom-0 start-0 px-2 px-md-5 px-lg-5 pb-3"
              >
                <Link
                  className="text-white icon-hover"
                  href={`https://instagram.com/stardelitesolutions`}
                  style={{ cursor: "pointer" }}
                >
                  <FaInstagram className="Ig" fontSize={30} />
                </Link>
                <Link
                  className="text-white icon-hover"
                  href={`https://www.linkedin.com/company/stardelite/`}
                  style={{ cursor: "pointer" }}
                >
                  <FaLinkedin className="Li" fontSize={30} />
                </Link>
                <Link
                  className="text-white icon-hover"
                  href={`https://twitter.com/stardeliteLtd`}
                  style={{ cursor: "pointer" }}
                >
                  <FaTwitter className="Tw" fontSize={30} />
                </Link>
              </div>
              </div>
              {/* <div
                ref={iconComponent}
                className="d-flex gap-3 text-white position-absolute bottom-0 start-0 px-2 px-md-5 px-lg-5 pb-3"
              >
                <Link
                  className="text-white icon-hover"
                  href={`https://instagram.com/stardelitesolutions`}
                  style={{ cursor: "pointer" }}
                >
                  <FaInstagram className="Ig" fontSize={30} />
                </Link>
                <Link
                  className="text-white icon-hover"
                  href={`https://www.linkedin.com/company/stardelite/`}
                  style={{ cursor: "pointer" }}
                >
                  <FaLinkedin className="Li" fontSize={30} />
                </Link>
                <Link
                  className="text-white icon-hover"
                  href={`https://twitter.com/stardeliteLtd`}
                  style={{ cursor: "pointer" }}
                >
                  <FaTwitter className="Tw" fontSize={30} />
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
