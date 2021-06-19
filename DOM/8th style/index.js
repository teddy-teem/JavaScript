
var fInc = document.getElementById("fontInc");
var fDec = document.getElementById("fontDec");

var Para = document.getElementById("para");



let x = window.getComputedStyle(Para).fontSize;   //to access it's css property

let fontSize = x.split("px");
console.log(fontSize[0]);
let defont = Number(fontSize[0]);


fInc.onclick = () =>{
    defont += 10;
    Para.style.fontSize = defont + "px";
}
fDec.onclick = () =>{
    defont -= 10;
    Para.style.fontSize = defont + "px";
}

