let erreur = gsap.timeline()
.from(".erreur_titre",
{opacity: 0, repeat: -2, ease: "power2.inOut", duration:0.7, yoyo:true})


.from(".erreur_desc",
{opacity: 0, y: 50, duration:3})
