import { Layout, FaqCarousel } from ".";
import Image from "next/image";

export default function Faq() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="faq d-flex justify-content-between flex-column"
        id="faq"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden hidden-bottom">
          <p className="m-0">just in case you were wondering</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "2.5rem",
              lineHeight: "72px",
            }}
          >
            FAQ
          </h5>
        </div>
        <article className="d-flex flex-lg-row gap-5 mt-5 flex-column flex-md-column align-items-center align-items-lg-stretch justify-content-between">
          <picture
            className="hidden hidden-left"
            style={{
              width: "26%",
              maxWidth: "20.875rem",
              display: "block",
            }}
          >
            <Image
              objectFit="cover"
              objectPosition="center"
              width={366}
              height={93}
              layout="responsive"
              data-src="/g3.png"
              src="/g3.png"
              loading="lazy"
              decoding="async"
              alt="faq-image"
              className="lazy-load w-100"
              style={{ objectFit: "cover", width: "100%", height: "100" }}
            />
          </picture>
          <FaqCarousel />
        </article>
      </section>
    </Layout>
  );
}
