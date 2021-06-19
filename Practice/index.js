let x = $("#txt");
let y = $("#area");
let btn = $("#btn");

let name, msg;
btn.click(()=>{
    name = x.val();
    msg = y.val();
    $("#div1").show(5000).hide(2000);
    $("#div1").html(`
        <h1 align="center">${name}</h1>
        <p align="center">${msg}</p>
    `);
    // alert("HI");
    
    

})




