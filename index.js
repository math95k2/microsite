gsap.registerPlugin(ScrollTrigger);

gsap.from("#mission", {
  scaleX: 0.5,
  scaleY: 0.5,
  scrollTrigger: {
    trigger: "#mission",
    start: "top 80%",
    end: "top 50%",
    scrub: true,
    markers: true,
  },
});

$(function () {
  $("a[href*=#]").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
