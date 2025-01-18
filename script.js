function loader(){
    
var timeline = gsap.timeline();
gsap.set("#headerContainer", {
    y: -100
})

timeline.to("#main", {
    y: 100,
    duration:0,
    scale: 0.6
})

timeline.to("#main", {
    y:-200,
    duration:0.8,
    ease: "power4.out",
})
timeline.to("#headerContainer", {
    y:0,
    duration:0.8
}, "a")
timeline.to("#main", {
    rotate : 360,
    duration: 2,
    scale: 1,
    y : 0,
    ease: "power3.inOut",
    onComplete : function(){
        document.querySelector("body").style.overflow = "auto";
    }
}, "a")
}

loader();

const cards = document.querySelectorAll('#productCard');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        const hoveredIndex = parseInt(card.dataset.index, 10);

        cards.forEach(otherCard => {
          const otherIndex = parseInt(otherCard.dataset.index, 10);
          if (otherIndex > hoveredIndex) {
            otherCard.style.transform = `translateX(20vw)`;
          } else {
            otherCard.style.transform = '';
          }
        });
      });

      card.addEventListener('mouseleave', () => {
        cards.forEach(otherCard => {
          otherCard.style.transform = '';
        });
      });
    });