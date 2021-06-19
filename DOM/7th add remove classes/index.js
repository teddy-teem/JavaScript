
var mainBtn = document.getElementById("click");
var popup = document.getElementById("pop");
var dbtn1 = document.getElementById("dbtn1");
var dbtn2 = document.getElementById("dbtn2");
var theme = document.getElementsByTagName("body");

let s=1;
setInterval( () =>{
    if(s==1){
        theme.style.backgroundColor = "lightseagreen";
        s=0;
    }
    else{
        theme.style.backgroundColor = "red";
        s=1;
    }
} ,3000);

mainBtn.onclick = function(){
    popup.style.display = "block";
    popup.style.transition = "all 2s";
}

dbtn1.onclick = function(){
    popup.style.display = "none";
    popup.style.transition = " all 5s";
    alert("Yes! I am ");
}
dbtn2.onclick = function(){
    popup.style.display = "none";
    popup.style.transition = " all 5s";
    alert("No! I am not");
}