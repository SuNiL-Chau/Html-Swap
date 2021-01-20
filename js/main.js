let img = document.querySelector("#swap-theme"), bd = document.querySelector('body');

function theme1() {
    img.src = './assets/img-1.jpg'
    bd.style.backgroundColor = '#a8d0cf';
}

function theme2() {
    img.src='./assets/img-2.jpg'
    bd.style.backgroundColor = "#b3729c";
}

function theme3() {
    img.src='./assets/img-3.jpg'
    bd.style.backgroundColor = "#ed5d45";
}