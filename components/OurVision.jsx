import { Layout } from ".";
import { Image } from "react-bootstrap";

export default function OurVision() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="vision text-dark-custom d-flex justify-content-between flex-column"
        id="vision"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-center hidden">
          <p className="m-0">what we want to do</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.5rem",
              lineHeight: "72px",
            }}
          >
            OUR VISION
          </h5>
        </div>
        <figure className="d-flex flex-column flex-md-column fw-medium flex-lg-row gap-5 align-items-center justify-content-around">
          <figcaption
            className="hidden"
            style={{
              textAlign: "justify",
              fontSize: "2.142857142857143vw",
            }}
          >
            Empowering businesses to achieve their full potential through
            seamless integration of technology and strategic insights.
          </figcaption>
          <picture className="hidden" style={{ width: "36.75059523809524vw" }}>
            <Image
              src=""
              data-src="/quoteImage.png"
              loading="lazy"
              className="lazy-load"
              alt="vision-image"
              decoding="async"
              style={{ width: "100%", height: "100%" }}
            />
          </picture>
        </figure>
      </section>
    </Layout>
  );
}
