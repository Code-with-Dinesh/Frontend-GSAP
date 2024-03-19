 let t1 = gsap.timeline()
t1.from(".nav h3",{
    y:-50,
    opacity:0,
    delay:0.3,
    duration:1,
    stagger:0.2
})
t1.from(".main h1",{
    x:-100,
    duration:0.9,
    opacity:0,
    stagger:0.3
})
t1.from("img",{
    x:-100,
    rotate:35,
    opacity:0,
    duration:1,
    stagger:0.4
})
t1.from(".about p",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.2
})
t1.from(".text",{
    x:-100,
    opacity:0,
    duration:1,
    stagger:0.4,
})
t1.from(".skills",{
    opacity:0,
    x:-100,
    duration:2,
    // stagger:0.9,
    scrollTrigger:{
        trigger:".html",
        scroller:"body",
        start:"top 90%",
        end:"top 40%",
        // markers:true,
        scrub:2,
    }
})
t1.from(".html",{
    x:-100,
    opacity:0,
    rotate:360,
    duration:2,
    scale:1,
    stagger:0.8,
    scrollTrigger:{
        trigger:".skills",
        scroller:"body",
        scrub:2,
        start:"top 100%",
        end:"top 45%",
        // markers:true
    }
})
t1.from(".info",{
        opacity:0,
        x:-100,
        duration:1,
         stagger:0.9,
        scrollTrigger:{
            trigger:".input-box",
            scroller:"body",
            start:"top 90%",
            end:"top 40%",
            // markers:true,
            scrub:2,
        }
     })
t1.from(".input-box",{
    opacity:0,
    x:-100,
    duration:1,
    stagger:0.3,
    // scale:0.9,
    scrollTrigger:{
        trigger:".input-box",
        scroller:"body",
        start:"top 100%",
        end:"top 40%",
        scrub:3,
        // markers:true,
    }
})
    