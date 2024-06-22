import { Layout } from ".";
import Image from "next/image";
import { Button } from "react-bootstrap";

export default function Academy() {
  return (
    <Layout padding={`layout-padding`}>
      <section
        className="academy text-dark-custom"
        id="academy"
        style={{ paddingTop: "9rem" }}
      >
        <figure className="d-flex flex-column flex-md-column fw-medium flex-lg-row gap-5 align-items-center justify-content-between">
          <div className="d-flex flex-column align-items-center">
            <h3
              className="hidden small-screen-t"
              style={{
                maxWidth: "30.688rem",
                textAlign: "center",
                fontSize: "2.25rem",
              }}
            >
              {/* Virtual school, perfectly created for your needs. */}
              Unlock Your Potential with Premium Remote Training! 
              {/* Excel with Our Premium Remote Training Program! */}
            </h3>
            <div
              class="row mb-0 mx-0 px-0 text-center"
              style={{ marginTop: "5rem", maxWidth:"30.688rem", fontWeight: "300" }}
            >
              <div class="col-6 mb-5">On-demand instructional videos</div>
              <div class="col-6 mb-5">Highly experienced instructors</div>
              <div class="col-6 mb-5">Hands-on learning approach</div>
              <div class="col-6 mb-5">Live mentoring sessions </div>
            </div>
            <div className="navBtnBorder position-relative">
              <Button
                type="submit"
                className={`academyBtn text-black`}
                style={{ fontSize: "0.85rem" }}
              >
               Launching soon..
              </Button>
            </div>
          </div>
          <picture
            className="hidden"
            style={{ width: "70%", maxWidth: "40.693rem" }}
          >
            <Image
              src="/academyHighlight.webp"
              objectFit="cover"
              objectPosition="center"
              width={535.85}
              height={420.44}
              layout="responsive"
              data-src="/academyHighlight.png"
              loading="lazy"
              className="lazy-load"
              alt="academy-image"
              decoding="async"
            />
          </picture>
        </figure>
      </section>
    </Layout>
  );
}
