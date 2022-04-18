const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const input = document.getElementById('todo-input');

addButton.addEventListener('click', onAddButtonClick);
input.addEventListener('input', onTodoInput);

function onAddButtonClick() {

}

function onTodoInput() {
    addButton.disabled = input.value.length === 0;
}

function onAddButtonClick() {
    const li = createListItem(input.value);
    todoList.appendChild(li);
    input.value = '';
    addButton.disabled = true;
}

function createListItem(name) {
    const listItem = document.createElement('li');
    listItem.textContent = name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', onDeleteClick);

    listItem.appendChild(deleteButton);

    return listItem;
}

function onDeleteClick() {
    this.parentNode.remove();
}