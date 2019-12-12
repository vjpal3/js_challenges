const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');
let itemNumber = 0;

function newTodo() {
  let todoItem = prompt("Enter your ToDo here:");

  if(todoItem !== null) {
    let li = document.createElement("li");
    li.setAttribute("class", classNames.TODO_ITEM);
    li.setAttribute("data-item", itemNumber);

    let span = document.createElement("span");
    span.setAttribute("class", classNames.TODO_TEXT);
    span.appendChild(document.createTextNode(todoItem));

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.name = "todoCheckbox";
    checkbox.setAttribute("class", classNames.TODO_CHECKBOX);
    checkbox.addEventListener("click", setCount);

    let deleteButton = document.createElement("button");
    deleteButton.name = "delete";
    deleteButton.appendChild(document.createTextNode("Delete"));
    deleteButton.setAttribute("class", classNames.TODO_DELETE);
    deleteButton.setAttribute("data-item", itemNumber);
    deleteButton.addEventListener("click", deleteTodo); 
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    list.appendChild(li);

    itemCountSpan.innerText = Number(itemCountSpan.innerText) + 1;
    uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) + 1;
    itemNumber++;
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

  function deleteTodo(e) {
    const li = document.querySelector(`li[data-item="${this.dataset.item}"]`);
    
    let child = li.firstChild;
    while(child) {
      if(child.type == "checkbox" && !child.checked) 
        uncheckedCountSpan.innerText = Number(uncheckedCountSpan.innerText) - 1;

      li.removeChild(child);
      child = li.firstChild
    }
    list.removeChild(li);
    itemCountSpan.innerText = Number(itemCountSpan.innerText) - 1;
  }
}
