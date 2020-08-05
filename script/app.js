const navigationAnimation = gsap.timeline({ paused: true, reversed: true });
const navBtn = document.querySelector(".navigation__button");
const heads = document.querySelectorAll(".header__headings")

const headDisplayHandler = () => {
  heads.forEach(element => {
    setTimeout(() => {
      element.style.opacity = 1
    }, 3000)
  });
}
headDisplayHandler()


navigationAnimation.to(".nav",{
  x: 1,
  duration: 1,
});
function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}

navBtn.addEventListener("click", (e) => {
  if (navigationAnimation.isActive()) {
    e.preventDefault();
    e.stopImmediatePropagation();
    return false;
  }
  toggleTween(navigationAnimation);
});

/////headerAnimation///////////////headerAnimation
const headerAnimetl = gsap.timeline({ repeat: -1, yoyo: true });

headerAnimetl
  .to(".header__part-1", {
    delay: 3,
    scale: 0,
    duration: 0.7,
  })
  .to(".header__part-2", {
    delay: 6,
    scale: 0,
    duration: 0.7
  })
  .to(".header__part-3", {
    delay: 9,
    scale: 0,
    duration: 0.7
  })
  .to(".header__part-4", {
    delay: 12,
    scale: 0,
    duration: 0.7
  })
  .to(".header__part-5", {
    delay: 15,
    scale: 0,
    duration: 0.7
  });

////Scrolling Animations////////////Scrolling Animations/////
gsap.registerPlugin(ScrollTrigger);

const scrolltl = gsap.timeline(
  {
    scrollTrigger: {
      trigger: ".section-top-products",
      toggleActions: "restart none reverse none",
      start: "top top",
      end: "2500px",
      scrub: true,
      pin: true
    },
  }
);

scrolltl
  .to(".section-top-products__products-2", {
    x: -1,
  })
  .to(".section-top-products__products-3", {
    x: -1,
  })
  .to(".section-top-products__products-4", { 
    x: -1,
  })
  .to(".section-top-products__products-5", {
    x: -1,
  })
  .to(".section-top-products__products-6", {
    
    x: -1,
  });
  const scrolltl2 = gsap.timeline(
    {
      scrollTrigger: {
        trigger: ".section-customer-reviews",
        toggleActions: "restart none reverse none",
        start: "top center",
        end: "200px"
      },
    }
  );
  scrolltl2
    .to(".section-customer-reviews__block-1", {
      opacity: 1
    })
    .to(".section-customer-reviews__block-2", {
      opacity: 1
    })
    .to(".section-customer-reviews__block-3", {
      opacity: 1
    })
  
s
