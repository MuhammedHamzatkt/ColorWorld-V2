const addBtn = document.getElementById("add-btn");
const taskInput = document.getElementById("task-input");
const taskList = document.getElementById("task-list");

addBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const li = document.createElement("li");
    li.textContent = taskText;

    // Görev tıklanınca tamamlandı olarak işaretle
    li.addEventListener("click", () => {
        li.classList.toggle("completed");
    });

    // Silme butonu
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
    taskInput.value = "";
});
