///--Gsap scrolltrigger

gsap.defaults({ ease: "none" });
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

let sections = gsap.utils.toArray(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: ".container",
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: () => "+=2400px" + document.querySelector(".container").offsetWidth,
  },
});

const anchors = document.querySelectorAll(".menu-item");

anchors.forEach((anchor) => {
  //
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElem = document.querySelector(e.target.getAttribute("href"));
    console.log(targetElem);

    if (targetElem) {
      const containerOffset = targetElem.offsetLeft;

      gsap.to(window, {
        scrollTo: { y: containerOffset / 1.5, autoKill: true },
        duration: 1,
      });
    } else {
      gsap.to(window, {
        scrollTo: {
          y: targetElem,
          autoKill: false,
        },
        duration: 1,
      });
    }
  });
});

////////////////////////////-- Menu toggle

document.querySelector(".menu").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".navigation").style.left = "0";
});

document.querySelector(".closebtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".navigation").style.left = "-24rem";
});

////////////////////----Header effect GSap

// TweenLite.set(".header-clipped", { backfaceVisibility: "hidden" });

// gsap.fromTo(
//   ".header-clipped",
//   { scaleX: 0 },
//   { duration: 0.5, scaleX: 1, delay: 1.1 }
// );

gsap.from(".header-clipped", 3, {
  left: "-52%",
  ease: Expo.easeInOut,
  delay: 1.8,
});

gsap.from(".header__main", 3, {
  left: "10%",
  ease: Expo.easeInOut,
  delay: 1.8,
});

// gsap.fromTo(
//   ".header__main",
//   { xPercent: 0, opacity: 1 },
//   { duration: 0.65, delay: 3.1, opacity: 1, xPercent: 85 }
// );

// gsap.fromTo(
//   "h2",
//   { scaleX: -200, opacity: 0 },
//   { duration: 1, scaleX: 1, delay: 1.5, x: 0, opacity: 1 }
// );

//////////////////////////////////-- page Bg color transition.

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerWidth / 1.9) {
    document.querySelector(".project").style.backgroundColor = "#c3004f";
  } else if (window.scrollY < window.innerWidth / 1.2) {
    document.querySelector(".project").style.backgroundColor = "#0a0e50";
  }

  if (window.scrollY > window.innerWidth / 1.9) {
    document.querySelector(".heading2").style.color = "#faf3b2";
    // document.querySelector(".para2").style.color = "#faf3b2";
  } else {
    document.querySelector(".heading2").style.color = "#fff";
    // document.querySelector(".para2").style.color = "#fff";
  }

  if (window.scrollY > window.innerWidth / 0.75) {
    console.log("Yes");
    document.querySelector(".about").style.backgroundColor = "#faf3b2";
  } else if (window.scrollY < window.innerWidth / 0.75) {
    document.querySelector(".about").style.backgroundColor = "#c3004f";
  }
});

///*/#2F2FA2
