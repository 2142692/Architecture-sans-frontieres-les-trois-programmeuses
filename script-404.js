gsap.registerPlugin(ScrollTrigger);

gsap.to(".text p", {
    backgroundPositionX: "0%",
    stagger: 1,
    ScrollTrigger: {
        trigger: ".text p",
        scrub: 1,
        start: "top center",
        end: "bottom top",
    },
});