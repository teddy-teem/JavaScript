
var list = document.getElementById("ul");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");
var btn3= document.getElementById("btn3");

var input = document.getElementById("text");

var item="";
// console.log(input);

input.addEventListener("input", (event)=>{
    item = event.target.value;        
});



document.body.addEventListener("keypress", (e)=>{
    if(e.keyCode==13){
        AddItem();

    }
})


btn.onclick = AddItem;

btn2.addEventListener("click", ()=>{
    console.log("clicked");
    var newListElem = document.createElement('li');
    var textNode = document.createTextNode(item);
    newListElem.appendChild(textNode);
    newListElem.id = "item" + x;

    var first = list.firstElementChild;
    list.replaceChild(newListElem, first);
});
btn3.onclick = ()=>{
    var firstElem = list.firstElementChild;
    list.removeChild(firstElem);
}



function AddItem(){

    if(item!== undefined && item!==null && item!==""){
        var newItem = document.createElement("li");
        var textNode = document.createTextNode(item);
        newItem.appendChild(textNode);
        newItem.id = "item" + x;
    
        list.appendChild(newItem);   
        x++;
        input.value = ""  ///to make empty the input box
        item = "";
        alert("success");
    }
    else{
        alert("No Empty Please");
    }
}

var x=0;



