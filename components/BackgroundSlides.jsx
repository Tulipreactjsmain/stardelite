import BgSlides from "react-bootstrap/Carousel";
import React, { useEffect, useState } from "react";
import NextImage from "next/image";

export default function BackgroundSlides() {
  const images = [
    "/heroImage1.webp",
    "/heroImage2.webp",
    "/heroImage3.webp",
    "/heroImage4.webp",
    "/heroImage5.webp",
  ];

  const [loadedImages, setLoadedImages] = useState({});

  useEffect(() => {
    const preloadImages = async () => {
      try {
        const imagePromises = images.map((imageUrl) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = imageUrl;
            img.onload = () => resolve(imageUrl);
            img.onerror = reject;
          });
        });

        await Promise.all(imagePromises);
        setLoadedImages(
          images.reduce((acc, url) => ({ ...acc, [url]: true }), {})
        );
      } catch (error) {
        console.error("Failed to preload images:", error);
      }
    };

    preloadImages();
  }, []);


  return (
    <>
      <BgSlides fade controls={false} indicators={false} className="Hero-BG">
        {images.map((imageUrl, index) => (
          <BgSlides.Item key={index} className="Hero-BG">
            <NextImage
              className={`image-transition ${
                loadedImages[imageUrl] ? "loaded" : ""
              }`}
              src={imageUrl}
              // placeholder="blur"
              layout="fill"
              alt="Hero background image"
              // blurDataURL="/starsImage.png"
              objectFit="cover"
              objectPosition="center"
            />
          </BgSlides.Item>
        ))}
      </BgSlides>
    </>
  );
}
