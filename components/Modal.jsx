import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineMenu } from "react-icons/ai";
import { IoChevronDownSharp } from "react-icons/io5";
import { Link as ScrollLink } from "react-scroll";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";

function NavbarModal({
  handleClose,
  handleShow,
  heroBottomIsTop,
  show,
  scrollToContact,
}) {

  return (
    <>
      <AiOutlineMenu
        onClick={handleShow}
        className={`fs-1 d-md-none d-lg-none ${
          heroBottomIsTop ? "text-dark-custom" : "text-white"
        }`}
      />

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        data-lenis-prevent={true}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div
            className={`w-100 h-100 nav-links d-flex flex-column gap-4 text-black cursor-pointer text-dark-custom"
            }`}
            style={{ cursor: "pointer", fontSize: "0.9rem" }}
          >
            <ScrollLink
              onClick={() => {
                handleClose();
              }}
              to="services"
              smooth={true}
              duration={700}
              spy={true}
            >
              <span>SERVICES</span>
              <span>
                <IoChevronDownSharp />
              </span>
            </ScrollLink>

            <ScrollLink
              onClick={() => {
                handleClose();
              }}
              to="technologies"
              smooth={true}
              duration={700}
              spy={true}
            >
              <span> TECHNOLOGIES </span>
              <span>
                <IoChevronDownSharp />
              </span>
            </ScrollLink>
            <ScrollLink
              onClick={() => {
                handleClose();
              }}
              to="about"
              smooth={true}
              duration={700}
              spy={true}
            >
              <span>ABOUT</span>
              <span>
                <IoChevronDownSharp />
              </span>
            </ScrollLink>
            <ScrollLink
              onClick={() => {
                handleClose();
              }}
              to="faq"
              smooth={true}
              duration={700}
              spy={true}
            >
              <span>FAQ</span>
              <span>
                <IoChevronDownSharp />
              </span>
            </ScrollLink>
            <ScrollLink
              onClick={() => {
                handleClose();
              }}
              to="vision"
              smooth={true}
              duration={700}
              spy={true}
            >
              <span>VISION</span>
              <span>
                <IoChevronDownSharp />
              </span>
            </ScrollLink>
            <ScrollLink
              onClick={() => {
                handleClose();
              }}
              to="core-values"
              smooth={true}
              duration={700}
              spy={true}
            >
              <span>VALUES</span>
              <span>
                <IoChevronDownSharp />
              </span>
            </ScrollLink>
            <div className="navBtnBorder" data-animated={false}>
              <Button
                closeButton
                onClick={() => {
                  scrollToContact();
                  handleClose();
                }}
                type="button"
                className={`navBtn text-black update-btn `}
                style={{ fontSize: "0.85rem" }}
              >
                CONTACT US
              </Button>
            </div>
            <div className="d-flex flex-column gap-2 side-menu-contact">
              <div>
                <span className="me-2">
                  <MdOutlineMailOutline />
                </span>
                <a href="mailto:info@stardelitesolutions.com">
                  hello@stardelitesolutions.com
                </a>
              </div>
              <div>
                <span className="me-2">
                  <MdOutlineLocalPhone />
                </span>
                <a href="tel:+15708244377">+1 (570) 824-4377</a>
              </div>
              <div>
                <span className="me-2">
                  <MdOutlineLocalPhone />
                </span>
                <a href="tel:+2348012345678">+234 (0) 810 454 6828</a>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarModal;
