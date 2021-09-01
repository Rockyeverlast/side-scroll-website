///Gsap scrolltrigger
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
    end: () => "+=1500px" + document.querySelector(".container").offsetWidth,
  },
});

const anchors = document.querySelectorAll(".menu-item");

anchors.forEach((anchor) => {
  //
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetElem = document.querySelector(e.target.getAttribute("href"));

    if (targetElem) {
      const containerOffset = targetElem.offsetLeft;

      gsap.to(window, {
        scrollTo: { y: containerOffset, autoKill: false },
        duration: 1.5,
      });
    } else {
      gsap.to(window, {
        scrollTo: {
          y: targetElem,
          autoKill: false,
        },
        duration: 1.5,
      });
    }
  });
});

////////////////////////////# Menu toggle

document.querySelector(".menu").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".navigation").style.left = "0";
});

document.querySelector(".closebtn").addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".navigation").style.left = "-24rem";
});

////////////////////#Header effect GSap

gsap.fromTo(
  ".header-clipped",
  { scaleX: 0 },
  { duration: 0.5, scaleX: 1, delay: 1.1 }
);

// gsap.fromTo(
//   "h2",
//   { scaleX: -200, opacity: 0 },
//   { duration: 1, scaleX: 1, delay: 1.5, x: 0, opacity: 1 }
// );

//# png float appear effect
gsap.fromTo(
  ".html",
  { yPercent: 50, opacity: 0 },
  { duration: 0.5, delay: 1.5, opacity: 1, yPercent: -10 }
);

gsap.fromTo(
  ".css",
  { yPercent: 50, opacity: 0 },
  { duration: 0.5, delay: 2, opacity: 1, yPercent: -10 }
);

gsap.fromTo(
  ".js",
  { yPercent: 50, opacity: 0 },
  { duration: 0.5, delay: 2.4, opacity: 1, yPercent: -10 }
);

gsap.fromTo(
  ".sass",
  { yPercent: 50, opacity: 0 },
  { duration: 0.5, delay: 2.8, opacity: 1, yPercent: -10 }
);

// gsap.fromTo(
//   ".header__textbox",
//   { yPercent: 40, opacity: 0 },
//   { duration: 0.5, delay: 1.5, opacity: 1, yPercent: -55 }
// );

// gsap.fromTo(
//   ".header__textbox--sub",
//   { yPercent: 40, opacity: 0 },
//   { duration: 0.5, delay: 2.2, opacity: 1, yPercent: 5 }
// );

////////////////////////////#Gsap png float animation

const randomX = random(1, 10);
const randomY = random(1, 10);
const randomDelay = random(0, 1);
const randomTime = random(3, 5);
const randomTime2 = random(5, 10);
const randomAngle = random(-10, 10);

const cans = gsap.utils.toArray(".can > img");
cans.forEach((can) => {
  gsap.set(can, {
    x: randomX(-1),
    y: randomX(1),
    rotation: randomAngle(-1),
  });

  moveX(can, 2);
  moveY(can, -2);
  rotate(can, 1);
});

function rotate(target, direction) {
  gsap.to(target, randomTime2(), {
    rotation: randomAngle(direction),
    // delay: randomDelay(),
    ease: Sine.easeInOut,
    onComplete: rotate,
    onCompleteParams: [target, direction * -1],
  });
}

function moveX(target, direction) {
  gsap.to(target, randomTime(), {
    x: randomX(direction),
    ease: Sine.easeInOut,
    onComplete: moveX,
    onCompleteParams: [target, direction * -1],
  });
}

function moveY(target, direction) {
  gsap.to(target, randomTime(), {
    y: randomY(direction),
    ease: Sine.easeInOut,
    onComplete: moveY,
    onCompleteParams: [target, direction * -1],
  });
}

function random(min, max) {
  const delta = max - min;
  return (direction = 1) => (min + delta * Math.random()) * direction;
}

//# page Bg color transition.

// function bgChanger() {
//   if (window.scrollX > window.innerHeigth / 1.2) {
//     console.log("scroll");
//   } else {
//     document.getElementsByClassName("about-me").backgroundColor = "#fff";
//   }
// }

// bgChanger();

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerWidth / 1.2) {
    document.querySelector(".project").style.backgroundColor = "#f3ec78";
  } else if (window.scrollY < window.innerWidth / 1.9) {
    document.querySelector(".project").style.backgroundColor = "#fff";
  }
});
