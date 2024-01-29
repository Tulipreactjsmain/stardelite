import { useEffect } from "react";
import {
  Inkscape,
  Gimp,
  Blockchain,
  AiIllustrator,
  Aws,
  Azure,
  Figma,
  Javascript,
  PowerBi,
  Vue,
  Photoshop,
  Tableu,
  Python,
  ReactIcon,
  Sql,
  MsOffice,
} from ".";

export default function Technologies() {
  useEffect(() => {
    const scroller = document.querySelector(".scroller");
    const scrollerInner = scroller.querySelectorAll(".scroller-inner");
    scrollerInner.forEach((scroller) => {
      const scrollerContent = Array.from(scroller.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scroller.appendChild(duplicatedItem);
      });
    });
  }, []);

  // function addAnimation () {

  // }
  return (
    <div
      className="d-flex justify-content-between flex-column"
      id="technologies"
      style={{ paddingTop: "8.5rem", gap: "4rem" }}
    >
      <div className="text-dark-custom text-center">
        <p>what we work with</p>
        <h5
          className="fw-semibold"
          style={{ color: "#8099CC", fontSize: "3rem", lineHeight: "72px" }}
        >
          TECHNOLOGIES
        </h5>
      </div>
      <div
        className="scroller overflow-hidden d-flex flex-column"
        data-animated="true"
        style={{ gap: "3.5rem" }}
      >
        <div className="technology-icons scroller-inner d-flex justify-content-between align-items-center">

          <AiIllustrator />

          <Aws />

          <Blockchain />

          <Azure />

          <Javascript />

          <Gimp />

          <MsOffice />

          <Photoshop />

          <Sql />

          <Inkscape />

          <PowerBi />

          <Tableu />

          <Figma />

          <Python />

          <ReactIcon />

          <Vue />
        </div>
        <div
          className="technology-icons scroller-inner d-flex justify-content-between align-items-center"
          data-direction="right"
        >

          <AiIllustrator />

          <Aws />

          <Blockchain />

          <Azure />

          <Javascript />

          <Gimp />

          <MsOffice />

          <Photoshop />

          <Sql />

          <Inkscape />

          <PowerBi />

          <Tableu />

          <Figma />

          <Python />

          <ReactIcon />

          <Vue />
        </div>
      </div>
    </div>
  );
}