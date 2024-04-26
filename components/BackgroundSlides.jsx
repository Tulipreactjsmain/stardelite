import BgSlides from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";

export default function BackgroundSlides() {
  const images = [
    "/heroImage1.webp",
    "/heroImage2.webp",
    "/heroImage3.webp",
    "/heroImage4.webp",
    "/heroImage5.webp",
  ];

  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = images.map((imageUrl) => {
        return new Promise((resolve, reject) => {
          const image = new Image();
          image.src = imageUrl;
          image.onload = resolve;
          image.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setImagesLoaded(true))
        .catch((error) => console.error("Failed to preload images:", error));
    };

    preloadImages();
  }, []);

  return (
    <>
      <BgSlides fade controls={false} indicators={false} className="Hero-BG">
        {images.map((imageUrl, index) => (
          <BgSlides.Item key={index} className="Hero-BG">
            <div
              className="Hero-BG"
              style={{
                backgroundImage: `url('${
                  imagesLoaded ? imageUrl : "/starsImage.png"
                }')`,
              }}
            ></div>
          </BgSlides.Item>
        ))}
      </BgSlides>
    </>
  );
}
