import gsap from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

export default function gsapEffects(ref) {
  gsap.registerPlugin(TextPlugin);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

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
    }, ref);
    return () => ctx.revert();
  }, []);
}
