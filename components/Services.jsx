import React, { useState, useEffect } from "react";
import { Image, Row, Col } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";

export default function Services() {
  const [isMouseIn, setIsMouseIn] = useState(null);
  const [viewWidth, setViewWidth] = useState(0);

  const services = [
    {
      title: "Software Development",
      image: "/Software-Development.png",
      summary:
        "Our team of experienced software engineers are ready to take your projects from the drawing board to reality",
    },
    {
      title: "Web Development",
      image: "/Web-Development.png",
      summary:
        "Our team of experienced web developers are ready to take your projects from the drawing board to reality",
    },
    {
      title: "Mobile Development",
      image: "/Mobile-Development.png",
      summary:
        "Our team of experienced software engineers are ready to take your projects from the drawing board to reality",
    },
    {
      title: "Ui/Ux Design",
      image: "/Ui:Ux-Design.png",
      summary:
        "Our team of experienced product designers are ready to take your projects from the drawing board to reality.",
    },
    {
      title: "Data Analytics",
      image: "/Data-Analytics.png",
      summary:
        "Our team of experienced data analysts are ready to take your projects from the drawing board to reality",
    },
    {
      title: "IT Consulting",
      image: "/IT-Consulting.png",
      summary:
        "Our team of experienced consultants are ready to take your projects from the drawing board to reality.",
    },
    {
      title: "Graphic Design",
      image: "/Graphic-Design.png",
      summary:
        "Our team of experienced graphic designers are ready to take your projects from the drawing board to reality.",
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
    <div
      className="services d-flex justify-content-between flex-column"
      id="services"
      style={{ paddingTop: "8.5rem", gap: "4rem" }}
    >
      <div className="text-dark-custom text-center">
        <p>what we do</p>
        <h5
          className="fw-semibold"
          style={{ color: "#8099CC", fontSize: "3rem", lineHeight: "72px" }}
        >
          OUR SERVICES
        </h5>
      </div>
      {/* d-flex flex-wrap w-100 position-relative align-items-center justify-content-center justify-content-lg-between justify-content-md-center */}
      <Row className="w-100 p-0 m-0 justify-content-evenly gap-3">
        {services?.map((service, index) => (
          <>
            <Col
              md={4}
              className="cursor-pointer service-box position-relative shadow-lg overflow-hidden p-0 mb-3"
              style={{
                height: "auto",
                width: "33.3%",
                maxWidth: "18rem",
                cursor: "pointer",
                borderRadius: "2px",
              }}
              key={index}
            >
              <Image
                src={service.image}
                width={`100%`}
                height={`100%`}
                className="img-fluid"
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
                  <div className="w-100 text-dark-custom h-100 d-flex flex-column p-4 ">
                    <div className="d-flex flex-column ">
                      <p className="text-center service-title" style={{ fontSize: "1.8rem" }}>
                        {getTitleWithBreaks(service.title)}
                      </p>
                      <p
                        style={{ lineHeight: "28px", fontWeight: "300" }}
                        className=""
                      >
                        {service.summary}
                      </p>
                    </div>
                    <div className="text-end" style={{ fontSize: "0.7rem" }}>
                      <span className="me-2">See more</span>
                      <span>
                        <GoArrowRight />
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="w-100 h-100 d-flex align-items-center justify-content-center position-relative">
                    <p
                      className="text-center service-title"
                      style={{ fontSize: "1.6rem", color: "#FFCC00" }}
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
          </>
        ))}
        <div
          className="p-0 mb-3 service-box"
          style={{ width: "33.3%", maxWidth: "18rem" }}
        >
          <div className="w-100 h-100 text-center d-flex align-items-center justify-content-center shadow">
            <span>See more</span>
            <span></span>
          </div>
        </div>
      </Row>
    </div>
  );
}
