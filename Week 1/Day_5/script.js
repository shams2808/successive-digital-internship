const input = document.getElementById("addTask");
const button = document.getElementById("addButton");
const list = document.getElementById("tasks");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (text === "") {
    alert("Enter something");
    return;
  }

  const li = document.createElement("li");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  const delButton = document.createElement("button");
  delButton.textContent = "Delete";
  delButton.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(checkbox);
  li.appendChild(document.createTextNode(" " + text + " "));
  li.appendChild(delButton);
  list.appendChild(li);

  input.value = "";
});