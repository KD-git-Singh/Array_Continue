let todoList = [];

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let todoItem = inputElement.value;
    todoList.push(todoItem);
    inputElement.value = '';
}    

function displayItems() {
    let displayElements = document.querySelector('#todo-items');
    for (i = 0; i < todoList.length; i++) {
        displayElements.innerText = displayElements.innerText + todoList[i];
    }
}