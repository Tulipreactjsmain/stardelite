import React from "react";
import { Layout, X, Whatsapp, LinkedIn, Instagram, LogoWhite } from ".";

export default function CoreValues() {
  return (
    <footer
      className="w-100 m-0 p-0"
      style={{
        backgroundColor: "#001133",
        height: "15.625rem",
      }}
    >
      <Layout padding={"layout-padding"}>
        <div className="py-4 d-flex flex-column justify-content-center gap-3 h-100">
          <div
            className="d-flex flex-column flex-md-row gap-3 flex-lg-row  justify-content-lg-between justify-content-md-between"
            style={{
              color: "#CCD6EB",
              fontSize: "0.9rem",
              fontWeight: "normal",
            }}
          >
            {/* <LogoWhite class={`logo`} /> */}
            <div className="d-flex gap-3 justify-content-start align-items-center ">
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
            <div className="d-flex gap-3 flex-column align-items-start align-items-lg-center align-items-md-center flex-md-row flex-lg-row">
              <a href="#" style={{ color: "#CCD6EB" }}>
                Privacy Policy
              </a>
              <a href="#" style={{ color: "#CCD6EB" }}>
                Terms of use
              </a>
            </div>
          </div>
          <div className="" style={{ color: "#CCD6EB" }}>
            <span>© 2024 Stardelite Ltd.</span>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
