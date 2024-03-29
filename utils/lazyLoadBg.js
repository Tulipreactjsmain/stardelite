import { useEffect } from "react";

export default function lazyLoadBg(ref) {
  let lazyImages;
  useEffect(() => {
    function lazyLoadImages() {
      if ("IntersectionObserver" in window) {
        lazyImages = ref?.current?.querySelectorAll(
          "img.lazy-load, .background"
        );
        let bgObserver = new IntersectionObserver(function (entries, observer) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              let target = entry.target;
              if (target.hasAttribute("data-src")) {
                target.setAttribute("src", target.getAttribute("data-src"));
                target.removeAttribute("data-src");
              }
              target.classList.remove("background");
              bgObserver.unobserve(target);
            }
          });
        });

        lazyImages.forEach((target) => {
          bgObserver.observe(target);
        });
      }
    }
    lazyLoadImages();
  }, []);
}
