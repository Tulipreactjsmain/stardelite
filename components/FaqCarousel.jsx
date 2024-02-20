import Carousel from "react-bootstrap/Carousel";

export default function FaqCarousel() {
  const faq = [
    {
      title: "What services do you provide?",
      description:
        "We provide a full spectrum of software services, encompassing UI/UX design, data analysis, and comprehensive software development.",
    },
    {
      title: "What industries do you specialize in? ",
      description:
        "Our expertise extends to high-demand sectors such as finance, healthcare, e-commerce, logistics, technology, and manufacturing.",
    },
    {
      title: "What services do you provide?",
      description:
        "Our team consists of seasoned professionals, ensuring a wealth of experience to deliver high-quality software services.",
    },
    {
      title: "What technologies do you specialize in? ",
      description:
        "We specialize in a diverse range of technologies, including but not limited to Python, JavaScript, AWS, C++, Php, Node.js, and various database management systems. Our adaptability allows us to stay at the forefront of emerging technologies. ",
    },
    {
      title: "How do you ensure the security of the software you develop?",
      description:
        "Security is paramount in our development process. We follow industry best practices, conduct regular security audits, and implement encryption and authentication mechanisms to safeguard your data and applications. ",
    },
    {
      title:
        "What is the typical timeline for a software development project? ",
      description:
        "Project timelines vary based on the complexity and scope. During the initial consultation, we provide a detailed project plan with milestones and timelines tailored to your specific requirements.",
    },
  ];
  return (
    <Carousel
    //   indicators={false}
      controls={false}
      className="faq-description text-dark-custom d-flex flex-column my-4 gap-5"
      style={{ maxWidth: "64.4047619047619vw", flex: "1" }}
    >
      {faq.map((faq, index) => (
        <Carousel.Item key={index} className="">
          <header className="text-center mb-3 d-flex justify-content-center">
            <h5 style={{ fontSize: "1.75rem", maxWidth: "750px"  }}>{faq.title}</h5>
          </header>
          <section
            className="d-flex justify-content-center mt-5"
            style={{
              fontSize: "1.4285714285714286vw",
              textAlign: "justify",
              fontWeight: "300",
            }}
          >
            <p style={{ maxWidth: "782px" }}>{faq.description}</p>
          </section>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
