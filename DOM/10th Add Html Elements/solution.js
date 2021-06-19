
var list = document.getElementById("ul");
var btn = document.getElementById("btn");
var input = document.getElementById("text");

var item="";
// console.log(input);



input.addEventListener("input", (event)=>{
    item = event.target.value;        
});



// console.log(item);

document.body.addEventListener("keypress", (e)=>{
    if(e.keyCode==13){
        AddItem();

    }
})
btn.onclick = AddItem;


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



