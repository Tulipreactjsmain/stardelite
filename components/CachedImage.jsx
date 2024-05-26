import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";

export default function CachedImage({
  cacheKey,
  fallbackSrc,
  alt,
  style,
  loading,
  dataSizes,
  sizes,
  decoding,
  className,
  srcSet,
  width,
}) {
  const [src, setSrc] = useState("");
  useEffect(() => {
    const fetchImage = async () => {
      if ("caches" in window) {
        try {
          const cache = await caches.open("image-cache");
          const cachedResponse = await cache.match(cacheKey);
        //   console.log("cached response: ", cachedResponse);

          if (cachedResponse) {
            const blob = await cachedResponse.blob();
            const url = URL.createObjectURL(blob);
            console.log("cached in window", url);

            setSrc(url);

            return;
          }
        } catch (error) {
          console.error("Error accessing cache", error);
        }
      } else {
        setSrc(fallbackSrc);
      }
    };

    fetchImage();
  }, [cacheKey, fallbackSrc]);

  return (
    <Image
      src={src}
      alt={alt}
      style={style}
    //   data-src={src}
      loading={loading}
      data-sizes={dataSizes}
      sizes={sizes}
      decoding={decoding}
      className={className}
      width={width}
    />
  );
}
