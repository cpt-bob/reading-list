const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("Please enter a book to read");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let close = document.createElement("close");
    close.innerHTML = "&#215;";
    li.appendChild(close);
  }
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "CLOSE") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTaskList() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showTaskList();

document.body.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});
