// querySelector()
// e.preventDefault()
// createElement()
// createTextNode()
// classList.add()
// appendChild()
// [dom].style.display=


const button = document.querySelector('button');
const input = document.querySelector('input');
const todo = document.querySelector('#todo-list');
const message = document.querySelector('#message');

button.addEventListener('click', (e) => {
    e.preventDefault();
    if (input.value === '') {
        message.style.display = 'block';
        setTimeout(() => {
            message.style.display = 'none';
        }, 2000);
        return;
    }
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(input.value));
    li.classList.add('item');
    console.log(li);
    todo.appendChild(li);
    input.value = '';

});

