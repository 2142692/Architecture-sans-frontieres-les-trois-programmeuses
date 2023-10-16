gsap.registerPlugin(ScrollTrigger);
let erreur = gsap.timeline()
.from(".erreur_titre",
{opacity: 0, repeat: -2, ease: "power2.inOut", duration:0.7, yoyo:true})


.from(".erreur_desc",
{opacity: 0, y: 50, duration:3})


/**histoire */


gsap.from('.fleche',{
    scrollTrigger: {
        scrub: 1,
        markers: true,
        start: '-300% 100%',
        end: '20% 25%',
        toggleActions: 'restart complete reverse reset',
        trigger: '.fleche',
      },
      y:"40%",scaleY:"10%",
     
},{ y:"0%", scaleY:"100%",});