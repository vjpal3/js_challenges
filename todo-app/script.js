const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

function newTodo() {
  let todoItem = prompt("Enter your ToDo here:");

  if(todoItem !== null) {
    let li = document.createElement("li");
    li.setAttribute("class", classNames.TODO_ITEM);

    let span = document.createElement("span");
    span.setAttribute("class", classNames.TODO_TEXT);
    span.appendChild(document.createTextNode(todoItem));

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "todoCheckbox";
    checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
    checkbox.addEventListener("click", setCount);
    
    li.appendChild(checkbox);
    li.appendChild(span);
    list.appendChild(li);

    itemCountSpan.innerText = Number(itemCountSpan.innerText) + 1;
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1;
  } 

  function setCount(e) {
    let uncheckedCount = Number(uncheckedCountSpan.innerText);
    if(e.target.checked) {
      uncheckedCount--;
    }
    else {
      uncheckedCount++;
    }
    uncheckedCountSpan.innerText = uncheckedCount;
  }
}
