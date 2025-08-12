let todoList = JSON.parse(localStorage.getItem('todoList')) || [
  {
    item:'buy milk',
    dueDate: '4/10'
  },
  { item:'Go to College',
    dueDate:'4/10/2023'
  },
  ];

displayItems();


function addTodo(){
  let inputElement = document.querySelector('#todo-input');
  let dateElement = document.querySelector('#todo-date');

  let todoItem = inputElement.value;

  let tododate = dateElement.value;

  todoList.push({item:todoItem,dueDate:tododate});
  localStorage.setItem('todoList',JSON.stringify(todoList));

  let storeTodo=JSON.parse(localStorage.getItem('todoList'));
  console.log(storeTodo);
  

  inputElement.value='';
  dateElement.value='';

  displayItems();

}

function displayItems(){

  let containerElement = document.querySelector('.todo-container');
  let newHtml = '';

  for (let i = 0; i < todoList.length;i++){
    let {item, dueDate} = todoList[i];
    newHtml +=` 

    
    <span>${item}</span> 
    <span>${dueDate}</span>

   <button id="delete-btn" onclick="deleteTodo(${i})">Delete</button>
    `;  
  }
  containerElement.innerHTML = newHtml;
}
function deleteTodo(index) {
    todoList.splice(index, 1);
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayItems();

}