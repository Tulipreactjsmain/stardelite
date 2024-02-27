import { useEffect, useState } from "react";
import servicesModalData from "@/pages/api/servicesModalData";
import Modal from "react-bootstrap/Modal";

function ServicesModal({
  handleClose,
  show,
  currentServiceIndex,
  setCurrentServiceIndex,
}) {
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        className="services-modal"
        data-lenis-prevent={true}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body scrollable>
          <div>
            <div
              className="service-modal-navs d-none d-lg-block d-md-block"
              style={{ backgroundColor: "var(--very-light-blue)" }}
            >
              <div className="buttons-container w-100 h-100">
                {servicesModalData.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentServiceIndex(index);
                    }}
                    className={`service-modal-button ${
                      currentServiceIndex === index ? "activeService" : ""
                    }`}
                  >
                    {service.title}
                    {console.log(
                      "currentServiceIndex ",
                      currentServiceIndex === index
                    )}
                  </button>
                ))}
              </div>
            </div>
            <div style={{ backgroundColor: "rgb(255, 255, 255, 0.9)" }}>
              <figure>
                <p
                  className="text-dark-custom"
                  style={{ textAlign: "justify" }}
                >
                  {servicesModalData[currentServiceIndex]?.summary}
                </p>
              </figure>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ServicesModal;
