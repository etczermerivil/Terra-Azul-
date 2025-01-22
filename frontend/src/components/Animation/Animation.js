import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const scrollEffects = () => {
    gsap.from(".scroll-up-element", {
        scrollTrigger: {
          trigger: ".scroll-up-element",
          start: "top 100%", // Trigger when the element enters the viewport
          end: "top 70%",   // End animation when the element is 70% of the way in
          scrub: false,
          markers: false,    // Debugging markers
        },
        opacity: 0,         // Start invisible
        duration: 1,        // 1-second fade-in
      });

  gsap.from(".fade-in-slide-up", {
    scrollTrigger: {
      trigger: ".fade-in-slide-up",
      start: "top 90%",
    },
    y: 30,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".blur-in-element", {
    scrollTrigger: {
      trigger: ".blur-in-element",
      start: "top 100%",
    },
    filter: "blur(10px)",
    opacity: 0,
    duration: 1,
  });
};
