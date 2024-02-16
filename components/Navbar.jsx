import { IoChevronDownSharp } from "react-icons/io5";
import { Button } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import LogoWhite from "./LogoWhite";
import LogoColored from "./LogoColored";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import Link from "next/link";

export default function Navbar({ heroBottomIsTop }) {
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
  
  return (
    <div
      className={`${
        heroBottomIsTop ? "update-navbar" : ""
      } d-flex justify-content-between align-items-center w-100 position-fixed layout-padding pt-2 pt-md-4 pt-lg-4 navbar`}
      style={{ zIndex: 5000 }}
    >
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
       nav-links text-white d-none d-md-flex d-lg-flex gap-4 text-black justify-content-center align-items-center cursor-pointer
       ${heroBottomIsTop ? "black-text" : "text-white"}
     `}
        style={{ cursor: "pointer", fontSize: "0.85rem" }}
      >
        <span></span>
        <ScrollLink to="services" smooth={true} duration={700}>
          <span>Services</span>
          <span>
            <IoChevronDownSharp color="#ffcc00" />
          </span>
        </ScrollLink>
        <span>
          <ScrollLink to="technologies" smooth={true} duration={700}>
            <span> Technologies </span>
            <span>
              <IoChevronDownSharp color="#ffcc00" />
            </span>
          </ScrollLink>
        </span>
        <span>
          <ScrollLink to="about" smooth={true} duration={700}>
            <span>About</span>
            <span>
              <IoChevronDownSharp color="#ffcc00" />
            </span>
          </ScrollLink>
        </span>
        <div className="navBtnBorder" data-animated={true}>
          <Button
            type="button"
            className={`navBtn text-black ${
              heroBottomIsTop ? "update-btn" : ""
            }`}
            style={{ fontSize: "0.85rem" }}
          >
            Contact us
          </Button>
          {/* <ScrollLink
            to="contact"
            className=" text-decoration-none text-black pointer-events-none"
            smooth={true}
            duration={700}
          ></ScrollLink> */}
        </div>
      </div>
      <AiOutlineMenu
        className={`fs-1 d-md-none d-lg-none ${
          heroBottomIsTop ? "text-black" : "text-white"
        }`}
      />
    </div>
  );
}
