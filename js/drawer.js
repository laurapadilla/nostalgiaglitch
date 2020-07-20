const canvas = document.querySelector("#drawer");

canvas.width = window.innerWidth * 2;
canvas.height = window.innerHeight * 2;

canvas.style.width = window.innerWidth + "px";
canvas.style.height = window.innerHeight + "px";

const context = canvas.getContext("2d");
context.scale(2, 2); // for retina-friendly canvas

// const image = document.createElement("img")
// image.src = "winmine.gif"

let aimX = null;
let aimY = null;
let currentX = null;
let currentY = null;

let i = 0;
const images = [
  { src: "/assets/winmine.gif", width: 161, height: 236 },
  { src: "/assets/tamagotchi.png", width: 250, height: 231 },
  { src: "/assets/baby-furby.png", width: 242, height: 259 },
  { src: "/assets/gameboy.png", width: 250, height: 250 },
  { src: "/assets/msn.png", width: 170, height: 175 },
  { src: "/assets/pokedex.png", width: 350, height: 288 },
  { src: "/assets/pokecard.png", width: 214, height: 291 },
  { src: "/assets/rct.png", width: 250, height: 139 },
  { src: "/assets/snes.png", width: 383, height: 238 },
  { src: "/assets/icq.png", width: 180, height: 180 },
].map((obj) => {
  const image = new Image();
  image.src = obj.src;
  obj.image = image;
  return obj;
});

document.addEventListener("mousemove", function (event) {
  aimX = event.pageX;
  aimY = event.pageY;
  if (currentX === null) {
    currentX = event.pageX;
    currentY = event.pageY;
  }
});

canvas.addEventListener("click", function () {
  i = i + 1;
  if (i >= images.length) {
    i = 0;
  }
});

const draw = function () {
  if (currentX) {
    //     if (images[i].complete) {
    context.drawImage(
      images[i].image,
      currentX - images[i].width / 2,
      currentY - images[i].height / 2,
      images[i].width,
      images[i].height
    );

    currentX = currentX + (aimX - currentX) * 0.09;
    currentY = currentY + (aimY - currentY) * 0.09;
  }

  requestAnimationFrame(draw);
};

document.getElementById("clear").addEventListener(
  "click",
  function () {
    context.clearRect(0, 0, canvas.width, canvas.height);
  },
  false
);

draw();

window.onload = function () {
  document.querySelector("audio").play();
};
