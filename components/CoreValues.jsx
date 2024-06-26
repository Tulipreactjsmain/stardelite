import { Adaptability, Layout, Collaboration, Expertise, Innovation } from ".";
import { Row, Col } from "react-bootstrap";

export default function CoreValues() {
  const coreValues = [
    { title: "INNOVATION", logo: <Innovation /> },
    { title: "EXPERTISE", logo: <Expertise /> },
    { title: "COLLABORATION", logo: <Collaboration /> },
    { title: "ADAPTABILITY", logo: <Adaptability /> },
  ];
  const width = 342;
  const height = 342;
  const aspectRatio = width / height;


  return (
    <Layout padding={`layout-padding`}>
      <section
        className="core-values d-flex justify-content-between flex-column"
        id="core-values"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden hidden-bottom">
          <p className="m-0">what we believe</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "2.5rem",
              lineHeight: "72px",
            }}
          >
            CORE VALUES
          </h5>
        </div>
        <Row className="w-100 p-0 m-0">
          {coreValues.map((value, index) => (
            <Col
              key={index}
              // sm={12}
              // md={3}
              // lg={6}
              className={`d-flex py-5 align-items-center justify-content-center core-values-col hidden zoom-out core${index}`}
              style={{
                // aspectRatio: aspectRatio.toFixed(2),
                borderRadius: "12px",
              }}
            >
              <div
                className="text-center text-dark-custom d-flex flex-column gap-4 justify-content-center align-items-center"
                style={{
                  fontSize: "1.6rem",
                }}
              >
                <span>{value.logo}</span>
                <span className="title">{value.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  );
}
