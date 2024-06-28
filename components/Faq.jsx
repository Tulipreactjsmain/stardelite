import { Layout, FaqCarousel, SectionHeader } from ".";
import Image from "next/image";

export default function Faq() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="faq d-flex justify-content-between flex-column"
        id="faq"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <SectionHeader
          subTitle={"just in case you were wondering"}
          title={"FAQ"}
        />
        <article className="d-flex flex-lg-row gap-5 mt-5 flex-column flex-md-column align-items-center align-items-lg-stretch justify-content-between">
          <picture
            className="hidden zoom-out"
            style={{
              width: "26%",
              maxWidth: "20.875rem",
              display: "block",
            }}
          >
            <Image
              objectFit="cover"
              objectPosition="center"
              width={366}
              height={93}
              layout="responsive"
              data-src="/g3.png"
              src="/g3.png"
              loading="lazy"
              decoding="async"
              alt="faq-image"
              className="lazy-load w-100"
              style={{ objectFit: "cover", width: "100%", height: "100" }}
            />
          </picture>
          <FaqCarousel />
        </article>
      </section>
    </Layout>
  );
}
