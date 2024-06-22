import { Layout } from ".";
import Image from "next/image";
import WhyUs from "./svgs/WhyUs";

export default function CoreValues() {
  const whyUsDetails = [
    {
      title: "Competence",
      desc: "Regardless of your industry, we possess a deep understanding of your business and its specific needs.",
    },
    {
      title: "Quality",
      desc: "Quality is our foremost priority. Every aspect of our work is ensured to meet the highest standards from start to finish.",
    },
    {
      title: "Reliability",
      desc: "We bring you certified experts who are passionate about innovation and dedicated to creating success.",
    },
    {
      title: "Flexibility",
      desc: "Since every development project is unique, we provide flexible engagement models to meet your specific needs.",
    },
  ];
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="why-us d-flex justify-content-between flex-column"
        id="why-us"
        style={{ paddingTop: "8.5rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center">
          <p>why you should trust us</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "2.5rem",
              lineHeight: "72px",
            }}
          >
            WHY CHOOSE US?
          </h5>
        </div>

        <article className="d-flex flex-lg-row gap-5 flex-column flex-md-column align-items-lg-stretch justify-content-between hidden">
          <figure style={{ width: "50%" }}>
            <figcaption
              className="mb-5 w-100 text-md-center text-dark-custom small-screen-p"
              style={{
                width: "100%",
                fontSize: "1.125rem",
                textAlign: "justify",
                fontWeight: "300",
              }}
            >
              As a software company, we create technology solutions grounded in
              trust and credibility. We don't claim to be the best, but our
              expertise is reflected in the value we provide through our
              technology services.
            </figcaption>
            <picture
              className="hidden"
              style={{
                height: "inherit",
                display: "block",
              }}
            >
              <Image
                width={549}
                height={600}
                layout="responsive"
                className="lazy-load"
                loading="lazy"
                src="/whyus.webp"
                objectFit="cover"
                objectPosition="center"
                data-src="/whyus.webp"
                alt="why-us-image"
                decoding="async"
                style={{ height: "600px" }}
              />
            </picture>
          </figure>

          <div
            className="why-us-desc text-dark-custom d-flex flex-column gap-4 hidden"
            style={{ width: "50%" }}
          >
            {whyUsDetails.map((details, index) => (
              <div
                className="d-flex flex-column gap-2 hidden"
                style={{
                  textAlign: "justify",
                }}
              >
                <div className="d-flex gap-3 align-items-center">
                  <span>
                    <WhyUs />
                  </span>
                  <span className="small-screen-t" style={{ fontSize: "1.55rem", fontWeight: "400" }}>
                    {details.title}
                  </span>
                </div>
                <p className="small-screen-p" style={{ fontSize: "1.125rem", fontWeight: "300" }}>
                  {details.desc}
                </p>
              </div>
            ))}
          </div>
        </article>
      </section>
    </Layout>
  );
}
