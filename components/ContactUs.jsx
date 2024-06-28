import {
  Layout,
  ContactUSLogo,
  ContactForm,
  X,
  Whatsapp,
  LinkedIn,
  Instagram,
  SectionHeader,
} from ".";
import { CiLocationOn } from "react-icons/ci";

import {
  MdOutlineLocalPhone,
  MdOutlineMailOutline,
  MdWhatsapp,
} from "react-icons/md";

export default function ContactUs() {
  return (
    <Layout>
      <section
        className="contact d-flex justify-content-between flex-column"
        id="contact"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <SectionHeader subTitle={"get in touch"} title={"CONTACT US"} />
        <div
          className="w-100 cta-section background" 
          style={{
            backgroundImage: "url('/contactUsImage.webp')",
            backgroundColor: "#001133",
            backgroundPosition: "100% 55%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div
            className="w-100 h-100 py-5 px-3"
            style={{ backgroundColor: "rgb(0, 14, 41, 0.4)" }}
          >
            <div
              className="layout-padding blur-bg d-flex flex-column flex-lg-row flex-md-row"
              style={{
                backdropFilter: ` blur(6px)`,
                marginTop: "80px",
                marginBottom: "80px",
                border: "solid #E0E0E0",
                borderRadius: "16px",
                maxWidth: "66.813rem",
              }}
            >
              
              <div
                className=" w-100 py-5 px-3"
                style={{ maxWidth: "47rem", backgroundColor: "#6B6B6B4D" }}
              >
                <ContactForm />
              </div>
              <div
                className=" w-100 py-5 px-3 d-flex flex-column justify-content-center align-items-start align-items-md-center align-items-lg-center"
                style={{
                  maxWidth: "19.813em",
                  backgroundColor: "rgb(255, 255, 255, 0.1)",
                }}
              >
                <div className="text-white">
                  <div
                    className="d-flex flex-column gap-2"
                    style={{ width: "fit-content" }}
                  >
                    <text className="fs-5 fw-semibold text-start">
                      Get in touch instantly
                    </text>

                    <a href="mailto:info@stardelitesolutions.com">
                      <span className="me-2 fs-4">
                        <MdOutlineMailOutline />
                      </span>
                      <span>Email us</span>
                    </a>

                    <a href="tel:+15708244377">
                      <span className="me-2 fs-4">
                        <MdOutlineLocalPhone />
                      </span>
                      <span>Call us</span>
                    </a>
                    <a
                      rel="noopener"
                      target="_blank"
                      href="https://wa.me/2348104546828"
                    >
                      <span className="me-2 fs-4">
                        <MdWhatsapp />
                      </span>
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
