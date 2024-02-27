import { Image } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";

export default function ContentBackground({ children }) {
  const images = [
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
  ];
  const [viewWidth, setViewWidth] = useState(0);
  const divRef = useRef(null);

  useEffect(() => {
    function updateHeight() {
      const pageContentDiv = document.getElementsByClassName("page-content")[0];
      const newParentHeight = pageContentDiv.clientHeight;
      divRef.current.style.height = newParentHeight + "px";
      console.log(pageContentDiv);
    }
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );

    if (vw <= 768) {
      updateHeight();
      window.addEventListener("resize", updateHeight);
    }

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <div
      ref={divRef}
      className="contentBackground d-flex flex-column align-items-center justify-content-between position-absolute w-100 explicitPosition"
      style={{ opacity: 0.06, zIndex: -1, height: "100%" }}
    >
      {images.map((img, index) => (
        <Image
          key={index}
          src={img}
          style={{
            // backgroundImage: `url("${img}")`,
            // backgroundPosition: "center",
            // backgroundRepeat: "no-repeat",
            // backgroundSize: "cover",
            height: "100%",
            width: "100%",
            objectFit: "cover",
          }}
        />
      ))}
    </div>
  );
}
