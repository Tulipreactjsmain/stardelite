import React from 'react'

export default function About() {
  return (
     <div
      className="about d-flex justify-content-between flex-column"
      id="about"
      style={{ paddingTop: "8.5rem", gap: "4rem" }}
    >
      <div className="text-dark-custom text-center">
        <p>who we are</p>
        <h5
          className="fw-semibold"
          style={{ color: "#8099CC", fontSize: "3.75rem", lineHeight: "72px" }}
        >
         ABOUT US
        </h5>
      </div>
      <div>Solo the CEO</div>
    </div>
  )
}
