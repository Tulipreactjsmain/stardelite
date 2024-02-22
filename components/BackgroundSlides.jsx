import BgSlides from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";

export default function BackgroundSlides() {
  const images = [
    "/starsImage.png",
    "/heroImage1.webp",
    "/heroImage2.webp",
    "/heroImage3.webp",
    "/heroImage4.webp",
    "/heroImage5.webp",
  ];

  const [backgroundImage, setBackgroundImage] = useState(images[0]);
  useEffect(() => {
    const image = new Image();
    image.src = images[1];
    image.onload = () => {
      setBackgroundImage(image.src);
    };
    return () => {
      image.onload = null;
    };
  }, []);
  return (
    <>
      <BgSlides fade controls={false} indicators={false} className="Hero-BG">
        <BgSlides.Item className="Hero-BG">
          <div
            className="Hero-BG"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          ></div>
        </BgSlides.Item>
        <BgSlides.Item className="Hero-BG">
          <div
            className="Hero-BG"
            style={{
              backgroundImage: `url('${images[2]}')`,
            }}
          ></div>
        </BgSlides.Item>
        <BgSlides.Item className="Hero-BG">
          <div
            className="Hero-BG"
            style={{
              backgroundImage: `url('${images[5]}')`,
            }}
          ></div>
        </BgSlides.Item>
        <BgSlides.Item className="Hero-BG">
          <div
            className="Hero-BG"
            style={{
              backgroundImage: `url('${images[4]}')`,
            }}
          ></div>
        </BgSlides.Item>
      </BgSlides>
    </>
  );
}
