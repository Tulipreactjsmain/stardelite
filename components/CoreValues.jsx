import {
  Adaptability,
  Layout,
  Collaboration,
  Expertise,
  Innovation,
  SectionHeader,
} from ".";
import { Row, Col } from "react-bootstrap";

export default function CoreValues() {
  const coreValues = [
    { title: "INNOVATION", logo: <Innovation /> },
    { title: "EXPERTISE", logo: <Expertise /> },
    { title: "COLLABORATION", logo: <Collaboration /> },
    { title: "ADAPTABILITY", logo: <Adaptability /> },
  ];

  return (
    <Layout padding={`layout-padding`}>
      <section
        className="core-values d-flex justify-content-between flex-column"
        id="core-values"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <SectionHeader subTitle={"what we believe"} title={"CORE VALUES"} />
        <Row className="w-100 p-0 m-0">
          {coreValues.map((value, index) => (
            <Col
              key={index}
              // sm={12}
              // md={3}
              // lg={6}
              // hidden zoom-out
              className={`d-flex align-items-center position-relative justify-content-center  core-values-col core${index}`}
              style={{
                borderRadius: "12px",
              }}
            >
              <div
                className="text-center text-dark-custom w-100 h-100 d-flex position-absolute top-0 flex-column gap-3 justify-content-center align-items-center"
                style={
                  {
                    // marginTop:"15%",
                    // fontSize: "1.3rem",
                  }
                }
              >
                <span className="w-100">{value.logo}</span>
                <span className="title">{value.title}</span>
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  );
}
