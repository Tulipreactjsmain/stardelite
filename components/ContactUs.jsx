import { Layout } from ".";

export default function CoreValues() {
  const width = 1440;
  const height = 748;
  const aspectRatio = width / height;

  return (
    <Layout>
      <section
        className="contact d-flex justify-content-between flex-column"
        id="contact"
        style={{ paddingTop: "8.5rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center">
          <p>get in touch</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.75rem",
              lineHeight: "72px",
            }}
          >
            CONTACT US
          </h5>
        </div>
        <div
          className="w-100"
          style={{
            backdropFilter: "blur(10px)",
            backgroundImage: "url('/contactUsImage.webp')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",         
          }}
        >
          <div
            className="layout-margin"
            style={{
              aspectRatio: aspectRatio.toFixed(2),
              backgroundColor: "rgb(255, 255, 255, 0.7)",
              marginTop: "80px",
              marginBottom: "80px",
              borderRadius: "16px",
            }}
          ></div>
        </div>
      </section>
    </Layout>
  );
}

