import Layout from "./Layout";
import { Image } from "react-bootstrap";
export default function About() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="about d-flex justify-content-between flex-column"
        id="about"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden">
          <p className="m-0">who we are</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.5rem",
              lineHeight: "72px",
            }}
          >
            ABOUT US
          </h5>
        </div>
        <article className="d-flex flex-lg-row gap-5 flex-column flex-md-column align-items-center align-items-lg-stretch justify-content-between">
          <picture
            className="hidden"
            style={{
              maxWidth: "34.313rem",
              display: "block",
            }}
          >
            <Image
              className="lazy-load"
              loading="lazy"
              data-src="/AboutUs.png"
              src=""
              alt="about-us-image"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </picture>

          <div
            className="aboutUs-description text-dark-custom d-flex flex-column my-4 gap-5 hidden"
            style={{ maxWidth: "42.142857142857146vw" }}
          >
            <header className="text-center mb-3">
              <h5 className="fw-semibold" style={{ fontSize: "3rem" }}>
                Welcome to Stardelite
              </h5>
              <p style={{ fontSize: "1.1rem", fontWeight: "300" }}>
                where innovation meets expertise
              </p>
            </header>
            <section
              className=""
              style={{
                fontSize: "1.4285714285714286vw",
                textAlign: "justify",
                fontWeight: "300",
              }}
            >
              <p className="mb-5">
                At Stardelite, we believe in the transformative power of
                technology to shape a better future. As a cutting-edge tech
                consulting firm, we specialize in providing strategic guidance
                and innovative solutions to help businesses thrive in the
                digital age.
              </p>
              <p>
                Stardelite is more than just a consultancy – we are your
                dedicated partners in navigating the complex landscape of modern
                technology. Our team of seasoned experts bring together a wealth
                of experience and a passion for innovation. We are committed to
                delivering customized solutions that not only meet your current
                needs but also future-proof your business.
              </p>
            </section>
          </div>
        </article>
      </section>
    </Layout>
  );
}
