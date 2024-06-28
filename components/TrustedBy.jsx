import React from "react";
import { Layout, Clutch, TechImply, Google, TrustPilot } from ".";
import Eco from "./svgs/Eco";

export default function TrustedBy() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="trusted-by text-dark-custom d-flex justify-content-between flex-column"
        id="trusted-by"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-center">
          <p className="mb-4 hidden hidden-bottom" style={{fontSize:"1rem", fontWeight:"400"}}>
            trusted by industry leading brands
          </p>
          <div className="d-flex gap-5 align-items-center justify-content-center background-blend-mode ">
            <Clutch /> <TechImply /> <Google /> <TrustPilot />
          </div>
        </div>
      </section>
    </Layout>
  );
}
