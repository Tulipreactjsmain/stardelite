import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function gsapEffects(ref) {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  const zoomOutStyles = {
    opacity: "0",
    transform: "scale(0.5)",
    transition: "all 0.5s",
    transitionDelay: "0s",
  };

  const hiddenRightStyles = {
    opacity: " 0",
    transform: "translateX(30%)",
    transition: "all 0.8s",
    transitionDelay: "0s",
  };

  const hiddenLeftStyles = {
    opacity: " 0",
    transform: "translateX(-30%)",
    transition: "all 0.8s",
    transitionDelay: "0s",
  };

  const hiddenBottomStyles = {
    opacity: "0",
    transform: "translateY(30%)",
    transition: "all 0.8s",
    transitionDelay: "0s",
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show-hidden");
        } 
      });
    });
    const hiddenElements = ref?.current?.querySelectorAll(".hidden");
    hiddenElements?.forEach((el) => {
      el.classList.contains("zoom-out") &&
        Object.assign(el.style, zoomOutStyles);
      el.classList.contains("hidden-right") &&
        Object.assign(el.style, hiddenRightStyles);
      el.classList.contains("hidden-left") &&
        Object.assign(el.style, hiddenLeftStyles);
      el.classList.contains("hidden-bottom") &&
        Object.assign(el.style, hiddenBottomStyles);
      observer.observe(el);
    });

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
      gsap.to(".onRenderOpacity", {
        opacity: 1,
        delay: 1,
        duration: 1,
      });
    }, ref);
    return () => ctx.revert();
  }, []);
}
