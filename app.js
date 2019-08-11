const addTask = document.querySelector('input[type="submit"]');
const task = document.querySelector('input[type="text"]');
const ul = document.querySelector('.tasks > .list > ul');
const clearTask = document.querySelector('.clear-task');
let tasks = JSON.parse(localStorage.getItem('tasks'));

if(tasks === null){
  ul.textContent = ` `;
}else{
  tasks.forEach(function(taskname){
    ul.innerHTML += `<li class="list-item">
    <div>${taskname}</div>
    <a href="#"><i class="fa fa-close icon"></i></a>
  </li>`;
  })
}

function addtolist(){
  let value = task.value;
  let li = document.createElement('li');
  let div = document.createElement('div');
  let a = document.createElement('a');
  a.setAttribute('href','#');
  a.innerHTML = `<i class="fa fa-close icon"></i>`;
  div.textContent = value;
  li.appendChild(div);
  li.appendChild(a);
  li.classList.add('list-item');
  ul.appendChild(li);
  task.value = '';

  if(!tasks){
    tasks = [];
    tasks.push(value);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }else{
    tasks.push(value);
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}

addTask.addEventListener('click',addtolist);

task.addEventListener('focus',function(e){
  e.target.style.outline = 'none';
});

document.body.addEventListener('click',function(e){
  if(e.target.classList.contains('icon')){
    let val = e.target.parentElement.previousElementSibling.textContent;
    e.target.parentElement.parentElement.remove();
    let tasklist = JSON.parse(localStorage.getItem('tasks'));
    let index = tasklist.indexOf(val);
    tasklist.splice(index,1);
    localStorage.setItem('tasks',JSON.stringify(tasklist));
  }
})

clearTask.addEventListener('click',function(e){
  ul.textContent= ` `;
  localStorage.clear();
})

