import { Image } from "react-bootstrap";
import Layout from "./Layout";

export default function ContentBackground() {
  const images = [
    "/path5597-2.svg",
    "/path5597-1.svg",
    "/path5597-2.svg",
    "/path5597-1.svg",
  ];
  return (
    <Layout>
      <div
        className="contentBackground d-flex flex-column align-items-center justify-content-between position-absolute explicitPosition"
        style={{ opacity: 0.06, zIndex: -1, height:"inherit" }}
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
              height: "auto",
              width: "100%",
            }}
          />
        ))}
      </div>
    </Layout>
  );
}
