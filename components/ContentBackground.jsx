import { useEffect, useRef, useState } from "react";

export default function ContentBackground({ children }) {
  const images = [
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
  ];
  const [viewWidth, setViewWidth] = useState(0);

  const mappedImages = images.map((img, index) => `url("${img}")`);

  return (
    <div
      className="contentBackground w-100 "
      style={{
        backgroundImage: mappedImages,
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "fit-content",
        width: "100%",
      }}
    >
      {children}
    </div>
  );
}
