function domLoaded() {
  const addBtn = document.getElementById("addBtn");
  const input = document.getElementById("taskInput");

  // Add button click -> addBtnClick
  addBtn.addEventListener("click", addBtnClick);

  // Task 3: allow Enter to submit; keep focus on textbox
  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      addBtnClick();
    }
  });
}

function addBtnClick() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  // Task 4: prevent empty tasks
  if (text.length === 0) {
    input.focus();
    return;
  }

  addTask(text);

  // Task 3 improvements: clear and refocus
  input.value = "";
  input.focus();
}

function addTask(newTask) {
  // Create <li> and set innerHTML per instructions
  const li = document.createElement("li");
  li.innerHTML = `<span class="task-text">${newTask}</span><button class="done-btn" aria-label="Remove task">&#10006;</button>`;

  // Append to <ol>
  const list = document.querySelector("ol#taskList");
  list.appendChild(li);

  // After appending, wire the newest done button to removeTask()
  const allDoneBtns = document.querySelectorAll(".done-btn");
  const lastBtn = allDoneBtns[allDoneBtns.length - 1];
  lastBtn.addEventListener("click", removeTask);
}

function removeTask(event) {
  // event.target is the ✖ button; its parent <li> is the item to remove
  const li = event.target.parentNode;
  const ol = li.parentNode;
  ol.removeChild(li);
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", domLoaded);
