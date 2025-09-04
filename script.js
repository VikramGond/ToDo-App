const task = document.getElementById('task');
const taskList = document.getElementById('task-list');
const para = document.getElementById('para');

function addTask() {
  const taskText = task.value.trim();
  if (taskText === '') {
    para.innerHTML = 'Please enter a Task!!';
    para.classList.remove('success');
    para.classList.add('error');

    setTimeout(() => {
      para.innerHTML = '';
      para.classList.remove('error')
    }, 3000)

    return;
  }


  let li = document.createElement('li');
  li.innerHTML = `<i class="fa-regular fa-circle"></i> ${taskText} <span><i class="fa-solid fa-xmark"></i></span>`;
  taskList.appendChild(li);

  task.value = '';
  para.innerHTML = "Task Added Successfully !";
  para.classList.remove('error');
  para.classList.add('success');

  setTimeout(() => {
    para.innerHTML = '';
    para.classList.remove('success');
  }, 3000);

  saveData()
}

taskList.addEventListener("click", function (e) {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle("checked");

    let icon = e.target.querySelector("i");

    if (e.target.classList.contains("checked")) {

      icon.classList.remove('fa-circle')
      icon.classList.add('fa-circle-check')

      para.innerHTML = "Task Completed Successfully !";
    } else {

      icon.classList.remove('fa-circle-check')
      icon.classList.add('fa-circle')

      para.innerHTML = "Task Marked as Incomplete !";
    }
    para.classList.remove('error');
    para.classList.add('success');

    setTimeout(() => {
      para.innerHTML = ''
      para.classList.remove('success')
    }, 1500);

    saveData();
  }

  if (e.target.classList.contains('fa-xmark')) {
    e.target.parentElement.parentElement.remove();
    para.innerHTML = 'Task deleted Successfully!';
    para.classList.remove('error');
    para.classList.add('success');

    setTimeout(() => {
      para.innerHTML = ''
      para.classList.remove('success')
    }, 2000);

    saveData();
  }

});

task.addEventListener("keypress", function(e) {
  if(e.key === 'Enter'){
    addTask();
  }
});



function saveData() {
  localStorage.setItem("data", taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem('data') || "";
}

showData();
