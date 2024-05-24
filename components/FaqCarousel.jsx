import Carousel from "react-bootstrap/Carousel";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useState, useEffect } from "react";

export default function FaqCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? faq.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === faq.length - 1 ? 0 : prevIndex + 1
    );
  };

  const faq = [
    {
      title: "What services do you provide?",
      description:
        "We provide a full spectrum of software services, encompassing UI/UX design, data analysis, and comprehensive software development. Whether you need assistance with building a custom software solution, optimizing your existing systems, or crafting a compelling brand identity, we have the expertise and resources to meet your needs. ",
    },
    {
      title: "What industries do you specialize in? ",
      description:
        "Our expertise extends to high-demand sectors such as finance, healthcare, e-commerce, logistics, technology, and manufacturing. We have experience working with clients of all sizes, from startups and small businesses to large enterprises and multinational corporations. Our diverse industry expertise allows us to bring fresh perspectives and innovative solutions to every project we undertake.",
    },
    {
      title: "How experienced is your team?",
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
    <figure
      className="d-flex justify-content-between hidden"
      style={{ maxWidth: "1082px", flex: "1" }}
    >
      <span className="my-auto mx-3 fs-1" onClick={handlePrevClick}>
        <HiChevronLeft color="#001a4d" />
      </span>
      <Carousel
        controls={false}
        activeIndex={currentIndex}
        onSelect={(index) => setCurrentIndex(index)}
        className="faq-description text-dark-custom d-flex flex-column my-0 gap-0"
      >
        {faq.map((faq, index) => (
          <Carousel.Item key={index} className="" style={{ height: "400px" }}>
            <header className="text-center mb-3 d-flex justify-content-center">
              <h5 style={{ fontSize: "1.75rem", maxWidth: "750px" }}>
                {faq.title}
              </h5>
            </header>
            <section
              className="d-flex justify-content-center mt-5"
              style={{
                fontSize: "1.5rem",
                textAlign: "justify",
                fontWeight: "300",
              }}
            >
              <p style={{ maxWidth: "782px", marginBottom: 0 }}>
                {faq.description}
              </p>
            </section>
          </Carousel.Item>
        ))}
      </Carousel>
      <span className="my-auto mx-3 fs-1" onClick={handleNextClick}>
        <HiChevronRight color="#001a4d" />
      </span>
    </figure>
  );
}
