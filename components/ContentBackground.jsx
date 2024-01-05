import { Image } from "react-bootstrap";

export default function ContentBackground() {
  const images = [
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
  ];
  return (
    <div
      className="px-0 px-md-0 px-lg-5d-flex flex-column align-items-center justify-content-center"
      style={{ opacity: 0.1 }}
    >
      {images.map((img, index) => (
        <Image
          key={index}
          style={{
            backgroundImage: `url("${img}")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            height:"1554px",
            width:"100%"
          }}
        />
      ))}
    </div>
  );
}
