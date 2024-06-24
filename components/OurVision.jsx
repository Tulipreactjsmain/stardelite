import { Layout } from ".";
import Image from "next/image";

export default function OurVision() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="vision text-dark-custom d-flex justify-content-between flex-column"
        id="vision"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-center hidden hidden-bottom">
          <p className="m-0">what we want to do</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "2.5rem",
              lineHeight: "72px",
            }}
          >
            OUR VISION
          </h5>
        </div>
        <figure className="d-flex flex-column flex-md-column fw-medium flex-lg-row gap-5 align-items-center justify-content-around">
          <figcaption
            className="hidden hidden-left"
            style={{
              textAlign: "justify",
              fontSize: "2rem",
            }}
          >
            Empowering businesses to achieve their full potential through
            seamless integration of technology and strategic insights.
          </figcaption>
          <picture
            className="hidden hidden-right"
            style={{ width: "44%", maxWidth: "34.741rem" }}
          >
            <Image
              src="/quoteImage.png"
              objectFit="cover"
              objectPosition="center"
              width={535.85}
              height={420.44}
              layout="responsive"
              data-src="/quoteImage.png"
              loading="lazy"
              className="lazy-load"
              alt="vision-image"
              decoding="async"
            />
          </picture>
        </figure>
      </section>
    </Layout>
  );
}
