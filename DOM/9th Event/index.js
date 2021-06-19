var username = document.getElementById("username");

// username.addEventListener("input" , ()=>{  //focus, change, input, blur=unfocused
//     console.log("Value Changed");
// });


var input;
username.addEventListener("change" , (event)=>{  //focus, change, input, 
    input = event.target.value;  //targer.value will give u input value;
    fun(input);

    // event.preventDefault(); //functoin prevent to refresh pagers after login button cliked
});




// keyup, keydown, keypress   are keybord events

//mousedown, mouseup click, dbclick, mouseover, mouseenter, mousemove 

var btn = document.getElementById("login");

btn.addEventListener("mouseenter", ()=>{
    btn.style.backgroundColor = "red";
});
btn.addEventListener("mouseleave", (e)=>{
    btn.style.backgroundColor = "green";
    btn.style.transition = "all 1s"
});


