function showMenu(){
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");

    let layer = document.querySelector(".fade-layer");
    layer.classList.toggle("visible");

}

const images = [
  "img/sw-propaganda.jpg",
  "img/sw-propaganda2.jpg",
  "img/sw-propaganda3.jpg",
];

const random = images[Math.floor(Math.random() * images.length)];
document.querySelector(".propaganda").src = random;
