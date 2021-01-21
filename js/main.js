let img = document.querySelector("#img-swap"),
  bd = document.querySelector("body");

function theme1() {
  img.src = "./assets/img-1.jpg";
  bd.style.backgroundColor = "#a8d0cf";
}

function theme2() {
  img.src = "./assets/img-2.jpg";
  bd.style.backgroundColor = "#b3729c";
}

function theme3() {
  img.src = "./assets/img-3.jpg";
  bd.style.backgroundColor = "#ed5d45";
}

//   es6 approach
// function theme(val) {
//   img.src = `./assets/img-${val}.jpg`;
//   val == 1
//     ? (bd.style.backgroundColor = "#a8d0cf")
//     : console.log("opps cannot get body color1");
//   val == 2
//     ? (bd.style.backgroundColor = "#b3729c")
//     : console.log("opps cannot get body color2");
//   val == 3
//     ? (bd.style.backgroundColor = "#ed5d45")
//     : console.log("opps cannot get body color3");
// }
