import { Layout, FaqCarousel } from ".";
import { Image } from "react-bootstrap";

export default function Faq() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="faq d-flex justify-content-between flex-column"
        id="faq"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden">
          <p className="m-0">just in case you were wondering</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.5rem",
              lineHeight: "72px",
            }}
          >
            FAQ
          </h5>
        </div>
        <article className="d-flex flex-lg-row gap-5 flex-column flex-md-column align-items-center align-items-lg-stretch justify-content-between">
          <picture
            className="hidden"
            style={{
              width:"26%",
              maxWidth: "22.875rem",
              display: "block",
            }}
          >
            <Image
              data-src="/g3.png"
              src=""
              loading="lazy"
              decoding="async"
              alt="faq-image"
              className="lazy-load w-100"
              style={{ objectFit: "cover", width: "100%", height: "100"}}
            />
          </picture>
          {/* <figure
            className="d-flex justify-content-between"
            style={{ maxWidth: "1082px", flex: "1" }}
          >
            <span className="my-auto mx-3 fs-1">
              <HiChevronLeft color="#001a4d" />
            </span>
            <FaqCarousel />
            <span className="my-auto mx-3 fs-1">
              <HiChevronRight color="#001a4d" />
            </span>
          </figure> */}
          <FaqCarousel />
        </article>
      </section>
    </Layout>
  );
}
