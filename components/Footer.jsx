import React from "react";
import Image from "next/image";
import { Layout } from ".";
import services from "@/pages/api/services";

export default function Footer() {
  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer
      className="w-100 m-0 pt-5"
      style={{
        backgroundColor: "#001133",
      }}
    >
      <Layout padding={`layout-padding`}>
        <div class="footer-columns justify-content-start justify-content-md-start justify-content-lg-between gap-4">
          <section class="footer-column d-flex flex-column justify-content-between gap-4">
            <Image
              src="/logo-white.svg"
              alt=""
              objectFit="cover"
              objectPosition="center"
              width={158}
              height={51}
              layout="responsive"
              data-src="/logo-white.svg"
              loading="lazy"
              decoding="async"
              className="lazy-load w-100"
            />
            <text style={{ fontWeight: "300" }}>
              Empowering businesses to achieve their full potential through
              seamless integration of technology and strategic insights.
            </text>
            <div>
              <h3 className="my-3">Subscribe</h3>
              <form>
                <input
                  type="email"
                  class="subscribe-input"
                  placeholder="Enter your email"
                />
                <button type="submit" class="subscribe-btn">
                  Subscribe
                </button>
              </form>
            </div>
          </section>
          <section class="footer-column">
            <h5 className="fs-5">Services</h5>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services" onClick={handleSmoothScroll}>
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section class="footer-column">
            <h5 className="fs-5">Support</h5>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
              <li>
                <a href="#contact" onClick={handleSmoothScroll}>
                  Talk to Support
                </a>
              </li>
            </ul>
          </section>
          <section class="footer-column">
            <h5 className="fs-5">Resources</h5>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#academy" onClick={handleSmoothScroll}>
                  Academy
                </a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
            </ul>
          </section>
          <section class="footer-column">
            <h5 className="fs-5">Company</h5>
            <ul>
              <li>
                <a href="#about" onClick={handleSmoothScroll}>
                  About Us
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#">Events</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#about" onClick={handleSmoothScroll}>
                  Team
                </a>
              </li>
            </ul>
          </section>
        </div>
        <hr className="mt-5 border border-1 d-block" />
        <section class="copyright pb-4">
          <p style={{ fontWeight: "300" }}>
            &copy; 2024 Stardelite ltd. All rights reserved.
          </p>
          <div className="text-white">
            <a
              href={`https://www.linkedin.com/company/stardelite/`}
              rel="noopener"
              target="_blank"
            >
              <i class="fa-brands fa-facebook-f text-white"></i>
            </a>
            <a
              href={`https://twitter.com/stardeliteLtd`}
              rel="noopener"
              target="_blank"
            >
              <i class="fa-brands fa-twitter text-white"></i>
            </a>
            <a
              href={`https://instagram.com/stardelitesolutions`}
              rel="noopener"
              target="_blank"
            >
              <i class="fa-brands fa-square-instagram text-white"></i>
            </a>
            <a
              href={`https://www.linkedin.com/company/stardelite/`}
              rel="noopener"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin text-white"></i>
            </a>
          </div>
        </section>
      </Layout>
    </footer>
  );
}
