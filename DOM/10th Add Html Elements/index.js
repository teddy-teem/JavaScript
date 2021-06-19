
var list = document.getElementById("ul");
var btn = document.getElementById("btn");
var btn2 = document.getElementById("btn2");


var x=0;
btn.onclick = ()=>{
    var newItem = document.createElement("li");
    var txt = "List "+ x;
    var textNode = document.createTextNode(txt);
    newItem.appendChild(textNode);
    newItem.id = "item" + x;

    //     list.appendChild(newItem);   //will add one onther below defualt


    var firstChild = list.firstElementChild;
    list.insertBefore(newItem,  firstChild)   //used to add elements last in first show



    // if(x!=0){
    //     var y=x-1;
    //     list.insertBefore(newItem,  document.getElementById("item" + y))   // my own solution ->condition used to add elements last in first show

    // }
    // else{
    //     list.appendChild(newItem);   //will add one onther below defualt
    // }
    x++;
}




