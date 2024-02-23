import React from "react";
import { Layout, ColoredandWhitelogo, LogoWhite } from ".";

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
        <div
          className="d-flex flex-column flex-md-row gap-3 flex-lg-row align-items-lg-center py-4 justify-content-lg-between justify-content-md-between h-100"
          style={{ color: "#CCD6EB", fontSize:"0.9rem", fontWeight:"normal" }}
        >
          {/* <span className="order-last order-md-first order-lg-first">© 2024 Stardelite Ltd. All rights reserved.</span> */}
          <LogoWhite class={`logo`}/>
          <div className="d-flex gap-3 flex-column align-items-start align-items-lg-center align-items-md-center flex-md-row flex-lg-row">
            <a href="#" style={{ color: "#CCD6EB" }}>
              Privacy Policy
            </a>
            <a href="#" style={{ color: "#CCD6EB" }}>
              Terms of use
            </a>
          </div>
        </div>
      </Layout>
    </footer>
  );
}
