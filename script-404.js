let anim = gsap
    .timeline({}) 
    .to(".clip-top .marquee, .clip-bottom .marquee", 5, {
        left: "100%",
        ease: "power4.inOut",
        yoyo: true,
        repeat: -1,
    })
    
    .to(".clip-center .marquee", 5, {
        left: "100%",
        ease: "power4.inOut",
        yoyo: true,
        repeat: -1,
    });


