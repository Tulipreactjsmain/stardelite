import { Image } from "react-bootstrap";

export default function ContentBackground() {
  const images = [
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
  ];
  return (
    <div className="px-2 px-md-5 px-lg-5 d-flex flex-column" style={{opacity:0.1}}>
      {images.map((img, index) => (
        <Image key={index} src={img} />
      ))}
    </div>
  );
}
