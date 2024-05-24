import { IoChevronDownSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { LogoColored, LogoWhite, Modal } from ".";
import { useState } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export default function Navbar({ heroBottomIsTop }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const scrollToHome = () => {
    if (window.scrollY === 0) {
      return;
    }
    scroll.scrollTo(0, {
      delay: 0,
      spy: true,
      smooth: true,
      duration: 700,
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      const contactSectionPosition =
        contactSection.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: contactSectionPosition,
        behavior: "smooth",
      });
    }
  };
  return (
    <header
      className={`${
        heroBottomIsTop ? "update-navbar" : ""
      }  w-100 position-fixed py-2 pt-md-4 pt-lg-3 navbar`}
      style={{ zIndex: 5000 }}
    >
      <div className="d-flex w-100  justify-content-between align-items-center layout-padding ">
        <Link
          className="fade-right-animation delay-1"
          href={`/`}
          onClick={scrollToHome}
          style={{ cursor: "pointer" }}
        >
          {heroBottomIsTop ? <LogoColored /> : <LogoWhite />}
        </Link>
        <div
          className={`
       nav-links text-white d-none d-md-flex d-lg-flex gap-5 text-black justify-content-center align-items-center cursor-pointer
       ${heroBottomIsTop ? "black-text" : "text-white"}
     `}
          style={{ cursor: "pointer", fontSize: "0.85rem" }}
        >
          <ScrollLink to="services" smooth={true} duration={700}>
            <span>Services</span>
            <span>
              <IoChevronDownSharp color="#ffcc00" />
            </span>
          </ScrollLink>

          <ScrollLink to="technologies" smooth={true} duration={700}>
            <span> Technologies </span>
            <span>
              <IoChevronDownSharp color="#ffcc00" />
            </span>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={700}>
            <span>About</span>
            <span>
              <IoChevronDownSharp color="#ffcc00" />
            </span>
          </ScrollLink>
          <div className="navBtnBorder" data-animated={true}>
            <Button
              onClick={scrollToContact}
              type="button"
              className={`navBtn text-black ${
                heroBottomIsTop ? "update-btn" : ""
              }`}
              style={{ fontSize: "0.85rem" }}
            >
              Contact us
            </Button>
          </div>
        </div>
        <Modal
          handleShow={handleShow}
          handleClose={handleClose}
          heroBottomIsTop={heroBottomIsTop}
          show={show}
          setShow={setShow}
          scrollToContact={scrollToContact}
        />
      </div>
    </header>
  );
}
