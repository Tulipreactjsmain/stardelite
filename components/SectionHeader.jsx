import React from "react";

export default function SectionHeader({ subTitle, title }) {
  return (
    <div className="text-center hidden hidden-bottom">
      <p className="m-0">{subTitle}</p>
      <h5
        className="fw-semibold"
        style={{
          color: "#8099CC",
          fontSize: "2.5rem",
          lineHeight: "3rem",
        }}
      >
        {title}
      </h5>
    </div>
  );
}
