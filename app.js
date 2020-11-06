//selectors
const input = document.querySelector('.todo-input');
const button = document.querySelector('.todo-btn');
const list = document.querySelector('.list');
const filter = document.querySelector('.filter');
//events
button.addEventListener('click', addTodo);
list.addEventListener('click', deltodo);
filter.addEventListener('click', filtertodo);
//function 
function addTodo(event){
    event.preventDefault();
    // creating todo div
    const tododiv = document.createElement('div');
    tododiv.classList.add('todo');
    const newtodo = document.createElement('li');
    newtodo.innerText = input.value;
    newtodo.classList.add('item');
    tododiv.appendChild(newtodo);
    //check btn
    const completed = document.createElement('button');
    completed.innerHTML = '<i class="fa fa-check"></i>';
    completed.classList.add('completed-btn');
    tododiv.appendChild(completed);
    //trash btn
    const trash = document.createElement('button');
    trash.innerHTML = '<i class="fa fa-trash"></i>';
    trash.classList.add('trash-btn');
    tododiv.appendChild(trash);
    //append
    list.appendChild(tododiv);
    //clear value
    input.value = "";
}
function deltodo(e){
    const item = e.target; 
    //delete
    if(item.classList[0] == 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fall');
        todo.addEventListener("transitionend", e => {
            todo.remove();
          });
    }
    //checkmark
    if(item.classList[0] == 'completed-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
//select
/*
function filtertodo(e){
    const todos = list.childNodes;
    todos.forEach(function(list){
        switch(e.target.value){
            case 'All':
                list.style.display = 'flex';
            case 'Completed':
                if(list.classList('completed')){
                    list.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
            case 'Uncompleted':
                if(!list.classList('completed')){
                    list.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
        }
    })
}
*/
