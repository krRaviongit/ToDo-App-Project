let todoList=['Wake Up at 6 AM', 'Go to College'];
displayItems();

function addTodo() {
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  todoList.push(todoItem);
  inputElement.value = '';

  displayItems();
}

function displayItems(){
  let containerElement = document.querySelector('.todo-container');

  let newHtml='';

  for(let i=0; i < todoList.length; i++){
    newHtml += ` 
          <div>
            <span>${todoList[i]}</span>
            <button onClick="todoList.splice(${i},1); displayItems();">Delete</button>
          </div>
          `;
  }
  containerElement.innerHTML = newHtml;
}