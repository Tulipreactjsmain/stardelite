import { useEffect } from "react";

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

const cacheName = "image-cache";

const cacheImages = () => {
  useEffect(() => {
    const preloadAndCacheImages = async () => {
      try {
        const cache = await caches.open(cacheName);

        for (const imageUrl of allImages) {
          const cachedResponse = await cache.match(imageUrl);
          if (!cachedResponse) {
            const response = await fetch(imageUrl, { cache: "no-cache" });
            await cache.put(imageUrl, response.clone());
          }
        }
      } catch (error) {
        console.error("Failed to preload and cache images:", error);
      }
    };

    preloadAndCacheImages();
  }, []);
};

export default cacheImages;
