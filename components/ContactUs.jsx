import {
  Layout,
  ContactUSLogo,
  ContactForm,
  X,
  Whatsapp,
  LinkedIn,
  Instagram,
} from ".";

export default function CoreValues() {
  const width = 1440;
  const height = 748;
  const aspectRatio = width / height;

  return (
    <Layout>
      <section
        className="contact d-flex justify-content-between flex-column"
        id="contact"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden">
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
            backgroundImage: "url('/contactUsImage.webp')",
            backgroundColor: "#001133",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="layout-margin py-5 d-flex flex-column flex-lg-row flex-md-row gap-0 justify-content-between align-items-center px-5"
            style={{
              aspectRatio: aspectRatio.toFixed(2),
              backdropFilter: ` blur(6px)`,
              backgroundColor: "rgb(255, 255, 255, 0.7)",
              marginTop: "80px",
              marginBottom: "80px",
              borderRadius: "16px",
            }}
          >
            <div
              className="mb-5 d-flex flex-column flex-lg-row flex-md-row justify-content-between gap-4 gap-md-0 gap-lg-0 order-2 order-lg-0 order-md-0 align-items-center"
              style={{ flex: "1" }}
            >
              <ContactUSLogo />
              <section className="d-flex flex-column mx-auto gap-5 text-center text-dark-custom order-first order-md-last order-lg-last">
                <div>
                  <h3 style={{ color: "#8099CC" }}>Office Address</h3>
                  <p>587 street, off Avenue, city.</p>
                </div>
                <div>
                  <h3 style={{ color: "#8099CC" }}>Contact Details</h3>
                  <p>
                    <a href="mailto:info@stardelitesolutions.com">
                      info@stardelitesolutions.com
                    </a>
                  </p>
                  <p>
                    <a href="tel:+15708244377">+1 (570) 824-4377</a>
                  </p>
                  <p>
                    <a href="tel:+2348012345678">+234 (0) 810 454 6828</a>
                  </p>
                </div>
                <div className="d-flex gap-3 flex-column">
                  <p className="m-0">get in touch instantly</p>
                  <div className="d-flex gap-3 justify-content-center">
                    <a
                      href={`https://twitter.com/stardeliteLtd`}
                      rel="noopener"
                      target="_blank"
                    >
                      <X />
                    </a>
                    <a
                      href={`https://www.linkedin.com/company/stardelite/`}
                      rel="noopener"
                      target="_blank"
                    >
                      <LinkedIn />
                    </a>
                    <a href="#">
                      <Whatsapp />
                    </a>
                    <a
                      href={`https://instagram.com/stardelitesolutions`}
                      rel="noopener"
                      target="_blank"
                    >
                      <Instagram />
                    </a>
                  </div>
                </div>
              </section>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
