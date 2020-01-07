document.addEventListener("DOMContentLoaded", () => {
  // your code here

    //set variables for the form, input, and ul
    let form = document.querySelector('form')
    let input = document.querySelector('input#new-task-description')
    let ul = document.querySelector('ul#tasks')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      //create new task li, set to input value, and append to the ul
      let newTask = document.createElement('li')
      newTask.innerText = input.value
      ul.appendChild(newTask)
      
    })


});
