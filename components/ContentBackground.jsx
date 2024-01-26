import { Image } from "react-bootstrap";

export default function ContentBackground() {
  const images = [
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
  ];
  return (
    <div
      className="d-flex flex-column align-items-center justify-content-center position-relative"
      style={{ opacity: 0.06 }}
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
            height: "1554px",
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}
