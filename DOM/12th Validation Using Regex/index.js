
var user = document.getElementById("username");
var password = document.getElementById("password");
var message = document.getElementById("p-val");

user.addEventListener("input", (e)=>{
    console.log(e.target.value);
    var pattern = /http{0,1}/;
    // /[a-z]/  select a to z
    // /[a-z][0-9]/ select number followed by a-z
    // /[a-zA-Z]/  select a-z or A-Z or any charectar
    // [a-zA-Z0-9][@] select any character or number before @ 
    // /[^0-9]/ select all except number smae  as [\D]
    //      /[\d]/ only numbers
    // /[\w]/ select all wich are  character or number 
    // /[\W]/ select all wich are not character or number 
    // /[\s]/ select all spaces 
    // /[\S]/ select all which are not spaces 
    // /[\d]{3}/  3 digits number
    // /[\w]{6,8}/  all character or number with lenght 6 to 8
    // /[\d]{1, }/  select number one or more 
    // /#[\w]{6}/ # followed by any char with 6 lenght or more 
    // /#[\w]{6}$/  start with # and end with exactly 6 CharacterData. 
    // /http?/ will select http or https 

    // / regex /gi  g case sensitive, gi case insensitive
    // g or gi is called flags 

    // var pattern = new RegExp('pen', 'gi')
    // str.match(pattern) gives u array as result
    // str.search(pattern) gives u index number as result
//    str.test(pattern) gives u true or false as result 
    
    // var str = www.facebook.com;
    // var pattern = /^www\.[\w]+\.(com | co | in |org)$/g  will match any link 






var currentValue = e.target.value;


    var x = pattern.test(currentValue);
    if(x==true){
        message.style.display= "none"
    }
    else{
        message.style.display = "block"
        message.innerHTML = "Not Valid"
    }
    console.log(x);
})