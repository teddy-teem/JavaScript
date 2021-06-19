
var A = document.getElementById("A");
var S = document.getElementById("S");
var D = document.getElementById("D");
var F = document.getElementById("F");
var G = document.getElementById("G");
var H = document.getElementById("H");
var J = document.getElementById("J");
var K = document.getElementById("K");
var L = document.getElementById("L");



document.body.addEventListener("keydown", (e)=>{
    if(e.keyCode == 65 || e.keyCode == 97){
        A.style.opacity = "0.5"
        myAudio('A');
    }
    else{
        A.style.opacity = "1.0"
    }
    if(e.keyCode == 83 || e.keyCode == 115){
        S.style.opacity = "0.5"
        myAudio('S');
    }
    else{
        S.style.opacity = "1.0"
    }
    if(e.keyCode == 68 || e.keyCode == 100){
        D.style.opacity = "0.5"
        myAudio('D');
    }
    else{
        D.style.opacity = "1.0"
    }
    if(e.keyCode == 70 || e.keyCode == 102){
        F.style.opacity = "0.5"
        myAudio('F');
    }
    else{
        F.style.opacity = "1.0"
    }
    if(e.keyCode == 71 || e.keyCode == 103){
        G.style.opacity = "0.5"
        myAudio('G');
    }
    else{
        G.style.opacity = "1.0"
    }
    if(e.keyCode == 72 || e.keyCode == 104){
        H.style.opacity = "0.5"
        myAudio('H');
    }
    else{
        H.style.opacity = "1.0"
    }
    if(e.keyCode == 74 || e.keyCode == 106){
        J.style.opacity = "0.5"
        myAudio('J');
    }
    else{
        J.style.opacity = "1.0"
    }
    if(e.keyCode == 75 || e.keyCode == 107){
        K.style.opacity = "0.5"
        myAudio('K');
    }
    else{
        K.style.opacity = "1.0"
    }
    if(e.keyCode == 76 || e.keyCode == 108){
        L.style.opacity = "0.5"
        myAudio('L');
    }
    else{
        L.style.opacity = "1.0"
    }
    
});






A.onclick = ()=>{myAudio('A');}
S.onclick = ()=>{myAudio('S');}
D.onclick = ()=>{myAudio('D');}
F.onclick = ()=>{myAudio('F');}
G.onclick = ()=>{myAudio('G');}
H.onclick = ()=>{myAudio('H');}
J.onclick = ()=>{myAudio('J');}
K.onclick = ()=>{myAudio('K');}
L.onclick = ()=>{myAudio('L');}


function myAudio(name){
    switch(name){
        case 'A':
            var audio = new Audio('./audio/boom.wav');
            break;
        case 'S':
            var audio = new Audio('./audio/clap.wav');
            break;
        case 'D':
            var audio = new Audio('./audio/hihat.wav');
            break;
        case 'F':
            var audio = new Audio('./audio/kick.wav');
            break;
        case 'G':
            var audio = new Audio('./audio/openhat.wav');
            break;
        case 'H':
            var audio = new Audio('./audio/ride.wav');
            break;
        case 'J':
            var audio = new Audio('./audio/snare.wav');
            break;
        case 'K':
            var audio = new Audio('./audio/tink.wav');
            break;
        case 'L':
            var audio = new Audio('./audio/tom.wav');
            break;
        
        default:
            break;
    }
    audio.play();
}