console.log("Loaded")

var CountDown = document.getElementById("count");
var InitCountDownValue = CountDown.innerHTML;


var color = ["maroon" ,"red", "green" ,"lightgreen", "blue", "skyblue", "violet", "yellow", "grey", "black"]

setInterval(function(){
    InitCountDownValue = InitCountDownValue > 0? InitCountDownValue-1 : 0;
    CountDown.innerHTML = InitCountDownValue;
    CountDown.style.color = color[InitCountDownValue];
    CountDown.style.fontSize = InitCountDownValue * 100 + "px";
    console.log(InitCountDownValue)
    if(InitCountDownValue == 0)
        clearInterval()
}, 1000)