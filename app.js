//selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-btn');
const list = document.querySelector('.list');

//events
button.addEventListener('click', addTodo);

//function 
function addTodo(event){
    event.preventDefault();
    // creating todo div
    const div = document.createElement('div');
    div.classList.add('todo');
    const newtodo = document.createElement('li');
    newtodo.innerText = 'HEY';
    newtodo.classList.add('item');
    div.appendChild(newtodo);
    //check btn
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="fa fa-check"></i>';
    completed.classList.add('completed-btn');
    div.appendChild(completed);
    //trash btn
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fa fa-trash"></i>';
    trash.classList.add('trash-btn');
    div.appendChild(trash);
}
