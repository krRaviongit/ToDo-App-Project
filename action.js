let todoList=[];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let todoItem = inputElement.value;
  todoList.push(todoItem);
  inputElement.value = '';
}

function displayItems(){
  let displayElement = querySelector('#todo-items');
  for(let i=0; i < todoList.length; i++){
    displayElement.innerText = displayElement.innerText + todoList[i];
  }
}