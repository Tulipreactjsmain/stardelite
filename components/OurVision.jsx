import { Layout } from ".";
import { Image } from "react-bootstrap";

export default function OurVision() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="vision text-dark-custom d-flex justify-content-between flex-column"
        id="vision"
        style={{ paddingTop: "8.5rem", gap: "4rem" }}
      >
        <div className="text-center">
          <p>what we want to do</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.75rem",
              lineHeight: "72px",
            }}
          >
            OUR VISION
          </h5>
        </div>
        <figure className="d-flex flex-column flex-md-column fw-medium flex-lg-row gap-5 align-items-center justify-content-around">
          <figcaption
            style={{
              textAlign: "justify",
              fontSize: "2.142857142857143vw",
            }}
          >
            Empowering businesses to achieve their full potential through
            seamless integration of technology and strategic insights.
          </figcaption>
          <picture style={{ width: "36.75059523809524vw" }}>
            <Image src="/quoteImage.png" width={`100%`} />
          </picture>
        </figure>
      </section>
    </Layout>
  );
}
