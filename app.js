//selecting Values from HTML

const list = document.querySelector('#dolist li');
//Reading inputs
const nList = document.querySelector('#details').value;

let Lists = getList();

// Selecting Event listners

AddtoList();

function AddtoList(){
document.querySelector('form').addEventListener('submit', newList);
  
list.addEventListener('click', removeList);

document.querySelector('form').addEventListener('keyup', (e)=>{
  if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector('#submit').click();
    }

  });

  // Calling Values Already Printed from Storage when page is loaded
  document.addEventListener('DOMContentLoaded', ListOnload);
}



// Setting out the Functions

function newList(e){
  e.preventDefault();
  const nList = document.querySelector('#details').value;
  //removing
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-list';
  removeBtn.textContent = 'X';

  const li = document.createElement('li');
  li.textContent = nList;

  //removing from List
  li.appendChild(removeBtn);

  //Adding to list
  list.appendChild(li);

  // Adding to Storage
  Addtostorage(nList);

  this.reset();

}

//Setting List removal

function removeList(e){

  if(e.target.classList.contains('remove-list') ){
e.target.parentElement.remove();
  }

  removeListFromStorage(e.target.parentElement.textContent);  

}

// Adding List to Storage

function Addtostorage(nList){
  Lists.push(nList);

  // Stringifying value from storage with JSON
  localStorage.setItem("Lists", JSON.stringify(Lists) );



}


// Getting List from storage
function getList(){
  let Lists;

  const Lokalstorage = localStorage.getItem('Lists');
  if(Lokalstorage === null){
    Lists = [];
  }
  else {
    Lists = JSON.parse(Lokalstorage);
  }

  return Lists;
 
}

// Printing List Onload
function ListOnload(){

  Lists.forEach((nList)=> {
    //removing
    const removeBtn = document.createElement('a');
    removeBtn.classList = 'remove-list';
    removeBtn.textContent = 'X';
  
    const li = document.createElement('li');
    li.textContent = nList;
  
    //removing from List
    li.appendChild(removeBtn);
  
    //Adding to list
    list.appendChild(li);
      
  
    });

 

}

// Removing from Storage

function removeListFromStorage(nList){

  const deleteList = nList.substring(0, nList.length -1);
  
  Lists.forEach( (Lokalstorage, index)=>{
     if(deleteList === Lokalstorage){
       Lists.splice(index, 1);
     }
    });

  localStorage.setItem('Lists', JSON.stringify(Lists) );
}

