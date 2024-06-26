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
  Layout,
} from ".";

export default function Technologies() {
  const technologyIcons = [
    <AiIllustrator />,

    <Aws />,

    <Blockchain />,

    <Azure />,

    <Javascript />,

    <Gimp />,

    <MsOffice />,

    <Photoshop />,

    <Sql />,

    <Inkscape />,

    <PowerBi />,

    <Tableu />,

    <Figma />,

    <Python />,

    <ReactIcon />,

    <Vue />,
  ];
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
  return (
    <Layout padding={`layout-padding`}>
      <div
        className="d-flex justify-content-between flex-column"
        id="technologies"
        style={{ paddingTop: "9rem", gap: "4rem" }}
      >
        <div className="text-dark-custom text-center hidden hidden-bottom">
          <p className="m-0">what we work with</p>
          <h5
            className="fw-semibold"
            style={{
              color: "#8099CC",
              fontSize: "2.5rem",
              lineHeight: "72px",
            }}
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
            {technologyIcons}
          </div>
          <div
            className="technology-icons scroller-inner d-flex justify-content-between align-items-center"
            data-direction="right"
          >
            {technologyIcons}
          </div>
        </div>
      </div>
    </Layout>
  );
}
