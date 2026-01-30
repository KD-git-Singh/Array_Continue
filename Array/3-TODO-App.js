let todoList = [
    {
        item: `Buy Milk`,
        dueDate: '04/10/2025'
    },
    {
        item: `Go to College`,
        dueDate: '04/10/2025'
    }];
displayItems();

function addTodo() {
    let inputElement = document.querySelector('#todo-input');
    let dateElement = document.querySelector('#todo-date');
    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}    

function displayItems() {
    let containerElements = document.querySelector('.todo-container');
    let newHTML = '';
    for (i = 0; i < todoList.length; i++) {
        let {item, dueDate} = todoList[i]
        // let item = todoList[i].item;      // we can write line 31 & 32 instead of line 30
        // let dueDate = todoList[i].dueDate  // but line 30 is more prefferd in companies.
        newHTML += `
        <span>${item}</span>
        <span>${dueDate}</span>
        <button class="btn-delete" onclick ="todoList.splice(${i}, 1); displayItems();">Delete</button>
        `;
    }  
    /* here we used <div> tag to take the second element in the next line  */
    /* but then we used 'GRID' property in css. by using that first element took full space, so we removed the <div> tag */
    /* <p> & <div> tag are block tag. i.e. button will appear in next line if we use these 2 tags.*/  
    containerElements.innerHTML = newHTML;
}