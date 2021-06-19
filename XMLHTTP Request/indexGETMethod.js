
var List = document.getElementById('ul');


function createNewNodeTODO(id, title ){
  var newListElement = document.createElement('li');
  var textNode = document.createTextNode(title);
  newListElement.appendChild(textNode);
  newListElement.id = id;

  return newListElement;
}

// readyStatus code  0 means request is  unsent
// readyStatus code  1 means request is  opened 
// readyStatus code  2 means request is  headers recieved
// readyStatus code  3 means request is  loading
// readyStatus code  4 means request is  done  

function getTODOListFromBackend(){
  var http = new XMLHttpRequest();

  http.onreadystatechange = function(){
    console.log("Entered 1");
    if(this.readyState === 4){
      console.log("Entered 2");
        if(this.status === 200){
          console.log("Successfully entered");
          var resp = JSON.parse (this.responseText);
          for(var i=0; i<resp.length; i++){
            console.log(createNewNodeTODO(resp[i].id) , resp[i].title);
            List.appendChild(createNewNodeTODO(resp[i].id , resp[i].title));
          }
        }
        else{
          console.log(this.status + " is failed");
        }
      }
      else{
        console.log("Entered status code: ", this.readyState);
      }
  }

  http.open('GET', 'https://jsonplaceholder.typicode.com/todos', true);
  http.send();
}


getTODOListFromBackend();

