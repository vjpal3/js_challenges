const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo() {
  let todoItem = prompt("Enter your ToDo here:");

  if(todoItem !== null) {
    var li = document.createElement("li");
    li.setAttribute("class", classNames.TODO_ITEM);

    var span = document.createElement("span");
    span.setAttribute("class", classNames.TODO_TEXT);
    span.appendChild(document.createTextNode(todoItem));

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "name";
    checkbox.value = "value";
    checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);

    var itemCount = Number(itemCountSpan.innerText) + 1;
    itemCountSpan.innerText = itemCount;
  } 

}
