gsap.to(".imgcontainer",{
   ease: Expo.easeInOut,
   width: "100%",
   height: "100%",
   duration: 2 ,
   repeat: 100,
   stagger: 2 
})

gsap.to(".text h1",{
    ease: Expo.easeInOut,
    duration: 2,
    stagger:2 ,
    repeat: 100,
    top: 0
 })

 gsap.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    duration: 2 ,
    stagger: 2 ,
    repeat: 100,
    top: "-100%"
 })