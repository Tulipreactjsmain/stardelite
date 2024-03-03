import { Layout, FaqCarousel } from ".";

export default function Faq() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="faq d-flex justify-content-between flex-column"
        id="faq"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden">
          <p>just in case you were wondering</p>
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
              maxWidth: "21.785714285714285vw",
              display: "block",
            }}
          >
            <img
              src="./g3.png"
              loading="lazy"
              alt="faq-image"
              style={{ width: "100%", objectFit: "cover" }}
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
          <FaqCarousel/>
        </article>
      </section>
    </Layout>
  );
}
