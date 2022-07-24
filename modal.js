let modalBackground = document.querySelector(".modal-background");
let modalContent = document.querySelector(".modal-content");
let opndImg = document.getElementById("modal-img");
let imgs = document.getElementsByClassName("imagen");
console.log(imgs);
console.log();

for(let i = 0; i < imgs.length; i++){
let img = imgs[i];
img.onclick = function(){
    modalBackground.style.display = "block";
    opndImg.src = this.src;
}}

let btn = document.querySelector(".close");
console.log(btn)

btn.onclick = function(){
    modalBackground.style.display = "none";
}

let contacto = document.getElementById("contacto");
let sobreMi = document.getElementById("sobre-mi");

contacto.onclick = () =>{
    alert("Aun no se ha implementado esta función pleb.")
}
sobreMi.onclick = () =>{
    alert("Aun no se ha implementado esta función pleb.")
}