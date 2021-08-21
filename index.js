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
  { duration: 0.5, scaleX: 1, delay: 1 }
);

// gsap.fromTo(
//   ".header__main",
//   { x: -500, opacity: 0 },
//   { duration: 1, x: 0, opacity: 1 }
// );

gsap.fromTo(
  ".header__textbox",
  { yPercent: 40, opacity: 0 },
  { duration: 0.5, delay: 1.7, opacity: 1, yPercent: -55 }
);

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

////////////////////////////#Header Hello and name animation

var tl = (tl = gsap.timeline({ repeat: 0 }));

tl.from("#line", { scaleX: 0, transformOrigin: "left center" });
tl.from("#upper", { duration: 0.75, y: 30 }, "text", { opacity: 0 });
tl.from("#lower", { duration: 0.75, y: -30 }, "text");
tl.to(
  "#line, #upper, #lower",
  { duration: 1, opacity: 1, ease: "none" },
  "+=2"
);
