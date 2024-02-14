import BgSlides from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";

export default function BackgroundSlides() {
  const images = [
    // "https://images.unsplash.com/photo-1554050857-c84a8abdb5e2?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    // "https://res.cloudinary.com/techbro/image/upload/v1700832852/Frame_1_ryctrp.svg",
    // "https://res.cloudinary.com/techbro/image/upload/v1700739951/unsplash_Xk4hnBZHHZ0_azpwb1.svg",
    // "https://res.cloudinary.com/techbro/image/upload/v1700738619/unsplash_DBGb9u1Yf6Q_zham6v.svg",
    // "https://res.cloudinary.com/techbro/image/upload/v1700832853/Rectangle_3_gyva6x.svg",
    // "https://res.cloudinary.com/techbro/image/upload/v1700832855/Rectangle_4_nr5rqr.svg",
    // "https://res.cloudinary.com/techbro/image/upload/v1700832824/Pexels_Photo_by_Gantas_Vaic%CC%8Ciule%CC%87nas_vkcm6c.svg",
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
