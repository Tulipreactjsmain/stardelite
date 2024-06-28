import { SectionHeader, Layout } from ".";
import Image from "next/image";
export default function About() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="about d-flex justify-content-between flex-column"
        id="about"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <SectionHeader subTitle={"who we are"} title={"ABOUT US"} />
        <article
          className="d-flex flex-lg-row gap-5 flex-column flex-md-column align-items-center align-items-lg-stretch justify-content-between"
          y
          // style={{ maxWidth: "1440px" }}
        >
          <picture
            className="hidden hidden-left"
            style={{
              width: "50%",
              maxWidth: "34.313rem",
              height: "auto",
              display: "block",
            }}
          >
            <Image
              width={649}
              height={500}
              layout="intrinsic"
              className="lazy-load"
              loading="lazy"
              src="/groupPhoto.webp"
              blurDataURL="/groupPhoto.webp"
              placeholder="blur"
              objectFit="cover"
              objectPosition="center"
              data-src="/groupPhoto.webp"
              alt="about-us-image"
              decoding="async"
            />
          </picture>

          <div
            className="aboutUs-description text-dark-custom d-flex flex-column gap-5 hidden hidden-right"
            style={{ maxWidth: "50%" }}
          >
            <header className="text-center">
              <h5 className="fw-semibold" style={{ fontSize: "2.25rem" }}>
                Welcome to Stardelite
              </h5>
              <p style={{ fontSize: "1.1rem", fontWeight: "300" }}>
                [where innovation meets expertise]
              </p>
            </header>
            <section
              className=""
              style={{
                fontSize: "1.2rem",
                textAlign: "justify",
                fontWeight: "300",
                maxWidth: "708px",
              }}
            >
              <p className="mb-5">
                {/* At Stardelite, we believe in the transformative power of
                technology to shape a better future. As a cutting-edge tech
                consulting firm, we specialize in providing strategic guidance
                and innovative solutions to help businesses thrive in the
                digital age. */}
                We are a collective of creative minds and technical experts with
                a relentless focus on excellence, dedicated to delivering
                software and products that transform how brands and companies
                operate.
              </p>
              <p>
                Stardelite is more than just a consultancy – we are your
                dedicated partners in navigating the complex landscape of modern
                technology.
              </p>
            </section>
          </div>
        </article>
      </section>
    </Layout>
  );
}
