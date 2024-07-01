import React from "react";
import { Layout, Clutch, TechImply, Google, TrustPilot } from ".";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function TrustedBy() {
  const [viewWidth, setViewWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const trustedBrands = [
    <Google />,
    <Clutch />,
    <TechImply />,
    <TrustPilot />,
    <picture className="mt-3 w-25">
      <Image
        sizes="auto"
        width={342}
        height={310}
        alt="service-image"
        objectFit="cover"
        objectPosition="center"
        layout="responsive"
        data-sizes="auto"
        data-src={"/Eco.png"}
        loading="lazy"
        decoding="async"
        className=" object-fit-cover lazy-load hidden zoom-out"
        src={"/Eco.png"}
      />
    </picture>,
  ];

  return (
    <Layout padding={`layout-padding`}>
      <section
        className="trusted-by text-dark-custom d-flex justify-content-between flex-column"
        id="trusted-by"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-center">
          <p
            className="mb-4 hidden hidden-bottom"
            style={{ fontSize: "1rem", fontWeight: "400" }}
          >
            trusted by industry leading brands
          </p>
          <div
            className="position-relative w-100 trusted-by-icons"
            // data-lenis-prevent={true}
          >
            {viewWidth > 767 ? (
              <div className="d-flex gap-5 align-items-center justify-content-start">
                {trustedBrands}
              </div>
            ) : (
              <Carousel
                indicators={false}
                controls={false}
                className="d-flex w-100 align-items-center justify-content-center"
              >
                {trustedBrands.map((brand, index) => (
                  <Carousel.Item key={index}>{brand}</Carousel.Item>
                ))}
              </Carousel>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
