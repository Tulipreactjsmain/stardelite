import { Layout } from ".";

export default function CoreValues() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="vision d-flex justify-content-between flex-column"
        id="vision"
        style={{ paddingTop: "8.5rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center">
          <p>what we believe</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.5rem",
              lineHeight: "72px",
            }}
          >
            WHY CHOOSE US?
          </h5>
        </div>
      </section>
    </Layout>
  );
}
