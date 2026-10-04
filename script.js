const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

function videoAnimation() {
  let vdoCon = document.querySelector("#vdo-container");
  let playBtn = document.querySelector("#play");

  vdoCon.addEventListener("mouseenter", function () {
    // alert("hey");
    // playBtn.style.opacity = 1
    // playBtn.style.scale = 1
    gsap.to(playBtn, {
      scale: 1,
      opacity: 1,
    });
  });
  vdoCon.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      scale: 0,
      opacity: 0,
    });
  });
  vdoCon.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 70,
      top: dets.y - 80,
    });
  });
}
videoAnimation();

function loadingAnimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.3,
  });
  gsap.from("#page1 #vdo-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5,
  });
}
loadingAnimation();
