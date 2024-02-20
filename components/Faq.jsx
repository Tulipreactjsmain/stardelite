import { Layout, FaqCarousel } from ".";

export default function Faq() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="faq d-flex justify-content-between flex-column"
        id="faq"
        style={{ paddingTop: "9rem", gap: "13.25rem" }}
      >
        <div className="text-dark-custom text-center">
          <p>just in case you were wondering</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.75rem",
              lineHeight: "72px",
            }}
          >
            FAQ
          </h5>
        </div>
        <article className="d-flex flex-lg-row gap-5 flex-column flex-md-column align-items-center align-items-lg-stretch justify-content-between">
          <picture
            style={{
              maxWidth: "21.785714285714285vw",
              display: "block",
            }}
          >
            <img
              src="./g3.png"
              alt="faq-image"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </picture>
          <FaqCarousel />
        </article>
      </section>
    </Layout>
  );
}
