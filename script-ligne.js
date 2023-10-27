const mask = document.querySelector('#Rectangle_1_3');
const sections = gsap.utils.toArray('.histoire_desc');

gsap.to(mask, {
    width: "100%",
    scrollTrigger:{
        trigger: "sections",
        start: "top bottom"
    }
})