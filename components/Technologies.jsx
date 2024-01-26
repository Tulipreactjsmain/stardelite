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
    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  }, []);

  // function addAnimation () {

  // }
  return (
    <div
      className="technologies d-flex justify-content-between flex-column"
      style={{ paddingTop: "10.5rem", gap: "4rem" }}
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
      <div className="scroller overflow-hidden" data-animated="true">
        <div className="technology-icons scroller-inner d-flex">
          {/* arinze's svgssss */}

          <Inkscape />

          <Gimp />

          <Figma />

          <AiIllustrator />

          <Aws />

          <Blockchain />

          <Azure />

          <Javascript />

          <MsOffice />

          <Photoshop />

          <Sql />

          <PowerBi />

          <Tableu />

          <Python />

          <ReactIcon />

          <Vue/>
        </div>
      </div>
    </div>
  );
}
