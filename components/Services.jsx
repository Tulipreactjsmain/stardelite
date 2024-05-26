import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { GoArrowRight } from "react-icons/go";
import { ServicesModal, Layout, CachedImage } from ".";
import services from "@/pages/api/services";
import { mapImagePathToCacheKey } from "../utils";

export default function Services() {
  const [isMouseIn, setIsMouseIn] = useState(null);
  const [show, setShow] = useState(false);
  const [currentServiceIndex, setCurrentServiceIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = (index) => {
    setShow(true);
    setCurrentServiceIndex(index);
  };
  const [viewWidth, setViewWidth] = useState(0);

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
    <>
      <Layout padding={`layout-padding`}>
        <section
          className="services d-flex justify-content-between flex-column"
          id="services"
          style={{ paddingTop: "9rem", gap: "4rem" }}
        >
          <div className="text-dark-custom text-center hidden">
            <p className="m-0">what we do</p>
            <h5
              className="fw-semibold"
              style={{
                color: "#8099CC",
                fontSize: "3rem",
                lineHeight: "72px",
              }}
            >
              OUR SERVICES
            </h5>
          </div>
          <div className="services-grid w-100 p-0 m-0">
            {services?.map((service, index) => (
              <div
                className={`cursor-pointer service-box position-relative shadow-lg overflow-hidden p-0 hidden service${index}`}
                style={{
                  height: "auto",
                  cursor: "pointer",
                  borderRadius: "2px",
                }}
                key={index}
                onClick={() => {
                  handleShow(index);
                }}
              >
                <Image
                  sizes=""
                  data-sizes="auto"
                  src=""
                  data-src={service.image}
                  loading="lazy"
                  decoding="async"
                  className=" object-fit-cover lazy-load"
                  style={{
                    objectPosition: "50% 50%",
                    width: "100%",
                    height: "100%",
                  }}
                />
                {/* <CachedImage
                  cacheKey={mapImagePathToCacheKey(service.image)}
                  // fallbackSrc={service.image}
                  sizes=""
                  dataSizes="auto"
                  loading="lazy"
                  decoding="async"
                  className=" object-fit-cover lazy-load"
                  style={{
                    objectPosition: "50% 50%",
                    width: "100%",
                    height: "100%",
                  }}
                /> */}
                <div
                  className="w-100 position-absolute top-0 h-100 text-center"
                  style={{
                    backgroundColor: `${
                      isMouseIn === index ? "#fcfcfc" : "#002266CC"
                    }`,
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
                      className="w-100 animate-onhover text-dark-custom h-100 d-flex flex-column justify-content-between align-items-center"
                      style={{ padding: "1.125rem 5px" }}
                    >
                      <div
                        className="d-flex flex-column"
                        style={{ maxWidth: "287px" }}
                      >
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
                            fontSize: "1.125rem",
                            textAlign: "center",
                          }}
                        >
                          {service.summary}
                        </p>
                      </div>
                      <div
                        className="d-flex justify-content-end me-5 w-100"
                        style={{ fontSize: "0.8rem" }}
                      >
                        <span className="me-2">See more</span>
                        <span>
                          <GoArrowRight />
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="w-100 h-100 d-flex align-items-center justify-content-center position-relative">
                      <p
                        className="text-center service-title fw-medium"
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
              </div>
            ))}
          </div>
        </section>
      </Layout>
      <ServicesModal
        currentServiceIndex={currentServiceIndex}
        setCurrentServiceIndex={setCurrentServiceIndex}
        handleClose={handleClose}
        show={show}
      />
    </>
  );
}
