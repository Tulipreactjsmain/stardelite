import { Layout, SectionHeader } from ".";
import Image from "next/image";

export default function OurVision() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="vision text-dark-custom d-flex justify-content-between flex-column"
        id="vision"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <SectionHeader subTitle={'what we want to do'} title={'OUR VISION'}/>
        <figure className="d-flex flex-column flex-md-row fw-medium flex-lg-row gap-5 align-items-center justify-content-between">
          <figcaption
            className="hidden hidden-left"
            style={{
              textAlign: "justify",
              fontSize: "2rem",
              maxWidth:"43.313rem"
            }}
          >
            Empowering businesses to achieve their full potential through
            seamless integration of technology and strategic insights.
          </figcaption>
          <picture
            className="hidden hidden-right"
            style={{ width: "44%", maxWidth: "28.741rem" }}
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
