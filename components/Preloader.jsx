import React, { useEffect, useState } from "react";

const allImages = [
  "/Software-Development.png",
  "/Web-Development.png",
  "/Mobile-Development.png",
  "/UiUx-Design.png",
  "/Data-Analytics.png",
  "social-advertising.webp",
  "/Graphic-Design.png",
  "/online-education.jpg",
  "/AboutUs.png",
  "/quoteImage.png",
  "/g3.png",
  "/contactUsImage.webp",
];

const Preloader = ({ children }) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const preloadImages = () => {
      const imagePromises = allImages.map((imageUrl) => {
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

  return children;
};

export default Preloader;
