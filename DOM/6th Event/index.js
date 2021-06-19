console.log("Loaded I am, ");


var btn = document.getElementById("button");


function onBtnClick(){
    alert("I am clicked")
}


btn.onclick = onBtnClick;
btn.addEventListener('mouseover', function(){
    btn.style.cursor = "pointer"
    btn.style.border = "2px solid maroon"
    btn.style.boxShadow = "0 5px 5px white"
})
btn.onclose = function(){
    btn.style.color= "red"
}