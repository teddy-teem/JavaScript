console.log("Got u Broh");

var countdownElem = document.getElementById("countdown");
var bgImgProperty = document.getElementById("bg-img");

var initialCountdownValue = countdownElem.innerHTML;
console.log(initialCountdownValue)



setInterval(function(){

   initialCountdownValue =  initialCountdownValue > 0? initialCountdownValue-1 : 0 ;
    countdownElem.innerHTML = initialCountdownValue;
    var BgImagePath = initialCountdownValue % 2 == 0?  "../Photos/river2.jpg": "../Photos/river3.jpg";
    bgImgProperty.src = BgImagePath;

}, 1000)




