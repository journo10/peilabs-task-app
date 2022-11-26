//responsive navbar menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav-list");

hamburgerMenu.addEventListener("click", () => {
  navList.classList.toggle("active");
});

//scroll group
const mainScroll = document.querySelector(".main-scroll-group-card");

let scroll = false;
let startX = 0;

mainScroll.addEventListener("mousedown", function (e) {
  scroll = true;
  startX = e.clientX;
});

mainScroll.addEventListener("mouseleave", function (e) {
  scroll = false;
});

window.addEventListener("mouseup", function (e) {
  scroll = false;
});

mainScroll.addEventListener("mouseover", function (e) {
  if (!scroll) {
    return;
  }

  this.scrollLeft += startX - e.clientX;
});

//change color theme
let input = document.querySelector("input");
let nav = document.querySelector("#navbar");
let btn = document.querySelector("#btn");
let footer = document.querySelector("#footer");

btn.addEventListener("click", function () {
  // ilk kelimeyi alıyorum büyük küçük harf duyarlı
  let input1 = input.value.toLocaleLowerCase();

  //alert veriyorum
  if (input1 === "") {
    alert("Lütfen kelime giriniz.");
    return;
  }

  // bir array döndüğü işin ilk kelimeyi alıyorum
  var word = input1.split(" ")[0];

  // bu ilk kelimedeki harflerin sayısal değerlerini toplayacağım
  var sum = 0;
  for (let i = 0; i < word.length; i++) {
    sum = sum + word.charCodeAt(i);
  }
  // böylece her kelimeyi bir sayıya çevirdik. Bu sayıyı herhangi bir şekilde renge dönüştürebiliriz.

  // bunlar temel 16 renk
  var colors = [
    "aqua",
    "black",
    "blue",
    "fuchsia",
    "gray",
    "green",
    "lime",
    "maroon",
    "navy",
    "olive",
    "purple",
    "red",
    "silver",
    "teal",
    "white",
    "yellow",
  ];
  var n = colors.length; // renklerin sayısı
  var x = sum % n; // mod aldık, yani toplamı 16 ya bölüp kalanı almış olduk
  let color = colors[x]; // o sayıya denk gelen renk

  nav.style.backgroundColor = color;
  btn.style.backgroundColor = color;
  footer.style.backgroundColor = color;
});
