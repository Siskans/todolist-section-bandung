//mengambil form 
const formElement = document.querySelector('.form-todo');

//menambah eventListener
formElement.addEventListener('submit' , (event) =>{
    event.preventDefault();

    //mengambil input elemennt
    const inputElement = document.querySelector('.input-todo');
    console.log(inputElement);

    //mengambil wrapper
    const wrapperTodoElement = document.querySelector('.wrapper-todo');

    //membuat todo item di js
    const todoItem = document.createElement('li');
    todoItem.innerHTML = inputElement.value;
    // const todoItem = `<li>${inputElement.value}</li>`;

    //menambahkan todo item kedalam wrapper todo
    // wrapperTodoElement.innerHTML = todoItem;
    wrapperTodoElement.append = todoItem;

    //menghapus input value setelah submit
    inputElement.value ='';

});