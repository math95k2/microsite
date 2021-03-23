gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("section");
document.documentElement.style.setProperty("--animate-duration", "2s");

sections.forEach((section) => {
  gsap.set(section, { css: { className: "animate__animated op-0" } });

  ScrollTrigger.create({
    trigger: "#mission",
    start: "top center",
    end: "top 100px",
    toggleClass: "animate__fadeInLeft",
    once: true,
  });

  ScrollTrigger.create({
    trigger: "#ingredienser",
    start: "top center",
    end: "top 100px",
    toggleClass: "animate__fadeInLeft",
    once: true,
  });

  ScrollTrigger.create({
    trigger: "#join",
    start: "top center",
    end: "top 100px",
    toggleClass: "animate__fadeInRight",
    once: true,
  });
});

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#produkter",
      start: "center 460px",
      end: "bottom top",
      scrub: true,
      pin: true,
    },
  })
  .from(".p3", { y: innerHeight * 1.5 })
  .from(".p1", { y: innerHeight * 1.5 });

console.log(innerHeight);
