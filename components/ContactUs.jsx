import {
  Layout,
  ContactUSLogo,
  ContactForm,
  X,
  Whatsapp,
  LinkedIn,
  Instagram,
} from ".";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

export default function ContactUs() {
  return (
    <Layout>
      <section
        className="contact d-flex justify-content-between flex-column"
        id="contact"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden">
          <p className="m-0">get in touch</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.5rem",
              lineHeight: "72px",
            }}
          >
            CONTACT US
          </h5>
        </div>
        <div
          className="w-100 cta-section"
          style={{
            backgroundImage: "url('/contactUsImage.webp')",
            backgroundColor: "#001133",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="layout-margin py-5 d-flex flex-column flex-lg-row flex-md-row gap-0 justify-content-between  px-4 px-md-5 px-lg-5"
            style={{
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
              <section className="d-flex flex-column h-100 mx-auto gap-5 text-center text-dark-custom order-first order-md-last order-lg-last">
                <div className="d-flex Office-Address flex-column gap-2">
                  <h3 style={{ color: "#8099CC" }}>Office Address</h3>
                  <div>
                    <span className="me-2 fs-4">
                      <CiLocationOn />
                    </span>
                    <span>10 Murphy Agungi, Lekki, Lagos.</span>
                  </div>
                </div>
                <div className="d-flex flex-column gap-2">
                  <h3 style={{ color: "#8099CC" }}>Contact Details</h3>
                  <div>
                    <span className="me-2 fs-4">
                      <MdOutlineMailOutline />
                    </span>
                    <a href="mailto:info@stardelitesolutions.com">
                      hello@stardelitesolutions.com
                    </a>
                  </div>
                  <div>
                    <span className="me-2 fs-4">
                      <MdOutlineLocalPhone />
                    </span>
                    <a href="tel:+15708244377">+1 (805) 703-4030</a>
                  </div>
                  <div>
                    <span className="me-2 fs-4">
                      <MdOutlineLocalPhone />
                    </span>
                    <a href="tel:+2348012345678">+234 (0) 810 454 6828</a>
                  </div>
                </div>
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
                  <a
                    rel="noopener"
                    target="_blank"
                    href="https://wa.me/2348104546828"
                  >
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
              </section>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>
    </Layout>
  );
}
