let tasks_count = 0;
window.addEventListener('load', ()=> {
    const task_create = document.querySelector('#task-create');
    const task_input = document.querySelector('#task-input');
    const task1 = document.querySelector('#tasks');

    task_create.addEventListener('submit', (e) => {
        e.preventDefault();
        const task = task_input.value;
        const task_inside = document.querySelectorAll(".task-inside")[tasks_count];

        if(!task){ 
            alert('Write your task please :)');
            return;
        }
        
        const task_el = document.createElement('div')
        task_el.classList.add('task')
        
        const task_content_el = document.createElement('div')
        task_content_el.classList.add('content')
        task_el.appendChild(task_content_el)
        
        const task_input_el = document.createElement('input');
		task_input_el.classList.add('text');
		task_input_el.type = 'text';
		task_input_el.value = task;
		task_input_el.setAttribute('readonly', 'readonly');

        const box = document.createElement('input');
        box.type = "checkbox";
        box.classList.add('input')

        task_content_el.appendChild(box)
        
		task_content_el.appendChild(task_input_el);
        
        task1.appendChild(task_el)
        
        const task_action_el = document.createElement('div');
        task_action_el.classList.add('actions');

        const task_delete_el = document.createElement('button')
        task_delete_el.classList.add('delete')
        task_delete_el.innerHTML = "DELETE"

        task_action_el.appendChild(task_delete_el)

        task_el.append(task_action_el)
        if(task_inside.childElementCount < 2) {
            task_inside.append(task_el);
        } else {
            const new_task = document.createElement('div');
            new_task.classList.add('task-inside');
            tasks_count++;
            new_task.append(task_el);
            task1.append(new_task);
        }

        task_input.value = "";
        task_delete_el.addEventListener('click', (e) => {
			task_delete_el.parentNode.parentNode.parentNode.removeChild(task_el);
            if(task_inside.childElementCount == 0) {
                task1.removeChild(task_inside);
                tasks_count--;
            }
		});

        box.addEventListener('click', () => {   
            task_input_el.style.textDecoration = 'line-through'
        })
    })
})