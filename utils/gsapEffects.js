import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";
import { Navbar } from "react-bootstrap";

export default function gsapEffects(ref) {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const navLinks = ref?.current?.querySelector(".nav-links");
    const navBtn = ref?.current?.querySelector(".navBtn");
    const logoElement = ref?.current?.querySelector(".logo");
    const navbar = ref?.current?.querySelector(".navbar");
    const outlineMenu = ref?.current?.querySelector(".outlineMenu");

    let ctx = gsap.context(() => {
      gsap.to(".textCursor", {
        opacity: 0,
        ease: "power2.inOut",
        repeat: -1,
      });
      gsap.to(".heroDescription", {
        duration: 3,
        text: "Transform your vision into reality with cutting-edge tech and personalized solutions.",
        ease: "none",
      });
      gsap.from(".Ig", {
        rotation: "360",
        delay: 2,
        y: -50,
        x: 10,
        duration: 1,
      });

      gsap.to(".Li", {
        rotation: "360",
        delay: 2,
        y: -50,
        x: 10,
        duration: 1,
      });
      gsap.to(".Tw", {
        rotation: "360",
        delay: 2,
        y: -40,
        x: 30,
        duration: 1,
      });

      gsap.to(".hero-section", {
        scrollTrigger: {
          trigger: ".hero-section",
          // markers:true,
          onUpdate: (self) => {
            if (self.progress > 0.99) {
              navLinks?.classList.remove("text-white");
              navBtn?.classList.add("update-btn");
              logoElement.src = "/Star22.png";
              navbar?.classList.add("update-navbar");
              outlineMenu?.classList.remove("text-white");
            } else {
              navLinks?.classList.add("text-white");
              navBtn?.classList.remove("update-btn");
              logoElement.src = "/white22.png";
              navbar?.classList.remove("update-navbar");
              outlineMenu?.classList.add("text-white");
            }
          },
        },
      });
    }, ref);
    return () => ctx.revert();
  }, []);
}
