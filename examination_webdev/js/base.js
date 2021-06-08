let popo = document.getElementById("spimg1");
let popo2 = document.getElementById("spimg2");
let popo3 = document.getElementById("spimg3");
let popo4 = document.getElementById("spimg4");
let popo5 = document.getElementById("spimg5");
let popo6 = document.getElementById("spimg6");

let sak = function(){
    this.className += " spimg11";
}

popo.addEventListener("click", sak);
popo2.addEventListener("click", sak);
popo3.addEventListener("click", sak);
popo4.addEventListener("click", sak);
popo5.addEventListener("click", sak);
popo6.addEventListener("click", sak);

let fillerColor = document.getElementById("fillerText");
let yeah = function(){
    this.className += " green"
}
fillerColor.addEventListener("click", yeah)