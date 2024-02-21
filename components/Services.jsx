import React, { useState, useEffect } from "react";
import { Image, Row, Col } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import Layout from "./Layout";

export default function Services() {
  const [isMouseIn, setIsMouseIn] = useState(null);
  const [viewWidth, setViewWidth] = useState(0);

  const services = [
    {
      title: "Software Development",
      image: "/Software-Development.png",
      summary:
        "Our team of experienced software engineers is adept at turning your concepts into robust software solutions.",
    },
    {
      title: "Web Development",
      image: "/Web-Development.png",
      summary:
        "We bring your visions to life online, crafting captivating web experiences with expertise and innovation.",
    },
    {
      title: "Mobile Development",
      image: "/Mobile-Development.png",
      summary:
        "We specialize in creating seamless mobile experiences, transforming your ideas into reality across all platforms.",
    },
    {
      title: "UI/UX Design",
      image: "/UiUx-Design.png",
      summary:
        "Our team combines creativity and user-centric design principles to craft intuitive and visually stunning interfaces.",
    },
    {
      title: "Data Analytics",
      image: "/Data-Analytics.png",
      summary:
        "We extract actionable insights from your data, empowering your business with informed decision-making.",
    },
    {
      title: "IT Consulting",
      image: "/IT-Consulting.png",
      summary:
        "We provide strategic IT guidance and technical expertise tailored to address your specific challenges.",
    },
    {
      title: "Graphic Design",
      image: "/Graphic-Design.png",
      summary:
        "We transform your ideas into captivating visuals that communicate your brand's story effectively.",
    },
    {
      title: "Online Education",
      image: "/online-education.jpg",
      summary:
        "We create immersive educational experiences that drive meaningful learning outcomes.",
    },
  ];

  const getTitleWithBreaks = (title) =>
    title.split(" ").map((word, index, array) => (
      <React.Fragment key={index}>
        {word}
        {index !== array.length - 1 && <br />}
      </React.Fragment>
    ));

  useEffect(() => {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    setViewWidth(vw);
  }, []);

  return (
    <Layout padding={`layout-padding`}>
      <section
        className="services d-flex justify-content-between flex-column"
        id="services"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden">
          <p>what we do</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "3.75rem",
              lineHeight: "72px",
            }}
          >
            OUR SERVICES
          </h5>
        </div>
        <Row className="w-100 p-0 m-0 justify-content-evenly gap-2">
          {services?.map((service, index) => (
            <Col
              md={4}
              lg={3}
              className="cursor-pointer service-box position-relative shadow-lg overflow-hidden p-0 mb-4 hidden"
              style={{
                height: "auto",
                width: "33.3%",
                maxWidth: "21.375rem",
                cursor: "pointer",
                borderRadius: "2px",
              }}
              key={index}
            >
              <Image
                src={service.image}
                width={`100%`}
                height={`100%`}
                className=" object-fit-cover"
                style={{objectPosition:"50% 50%"}}
              />
              <div
                className="w-100 position-absolute top-0 h-100 text-center"
                style={{
                  backgroundColor: `${
                    isMouseIn === index ? "white" : "#002266CC"
                  }`,
                  opacity: 0.9,
                  transition: "background-color 0.3s ease-in-out",
                }}
                onMouseOver={() => {
                  viewWidth > 992 && setIsMouseIn(index);
                }}
                onMouseOut={() => {
                  viewWidth > 992 && setIsMouseIn(null);
                }}
              >
                {isMouseIn === index ? (
                  <div
                    className="w-100 text-dark-custom h-100 d-flex flex-column"
                    style={{ padding: "1.125rem 2.313rem" }}
                  >
                    <div className="d-flex flex-column pb-4">
                      <p
                        className="text-center service-title p-2"
                        style={{ fontSize: "1.8rem" }}
                      >
                        {getTitleWithBreaks(service.title)}
                      </p>
                      <p
                        style={{
                          lineHeight: "28px",
                          fontWeight: "300",
                          fontSize: "1.0714285714285714vw",
                        }}
                      >
                        {service.summary}
                      </p>
                    </div>
                    <div className="position-absolute bottom-0 end-0 p-4" style={{ fontSize: "0.7rem" }}>
                      <span className="me-2">See more</span>
                      <span>
                        <GoArrowRight />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center position-relative">
                    <p
                      className="text-center service-title  fw-medium"
                      style={{ fontSize: "1.8rem", color: "#FFCC00" }}
                    >
                      {getTitleWithBreaks(service.title)}
                    </p>
                    <div className="position-absolute bottom-0 end-0 text-white p-3">
                      <GoArrowRight />
                    </div>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </Layout>
  );
}
