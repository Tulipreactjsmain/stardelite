import { Image } from "react-bootstrap";

export default function ContentBackground() {
  const images = [
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
  ];
  return (
    <div className="d d-flex flex-column opacity-25">
      {images.map((img, index) => (
        <Image key={index} src={img} />
      ))}
    </div>
  );
}
