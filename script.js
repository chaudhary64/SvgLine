let svgcont = document.querySelector("svg");

let x;
let y;

let initialPath = "M 10 200 Q 300 200 750 200";

svgcont.addEventListener("mousemove", function (e) {
  x = e.offsetX;
  y = e.offsetY;

  gsap.to("svg path", {
    attr: {
      d: `M 10 200 Q ${x} ${y} 750 200`, // Changing the d attribute of the path
    },
    duration: 0.1,
    ease: "power1.inOut",
  });
});

svgcont.addEventListener("mouseleave", function () {
    gsap.to("svg path", {
        attr: {
        d: initialPath,
        },
        duration: 0.5,
        ease: "elastic.out(1,0.1)", // Elastic ease
    });
});