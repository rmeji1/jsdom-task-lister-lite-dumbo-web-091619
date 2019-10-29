document.addEventListener('DOMContentLoaded', () => {
  const createTaskForm = document.querySelector('#create-task-form')
  createTaskForm.addEventListener('submit', taskFormSubmitted)

  function taskFormSubmitted (event) {
    event.preventDefault()
    const newTaskDesc = event.target['new-task-description'].value
    appendNewTask(newTaskDesc)
  }

  function appendNewTask (task) {
    const unorderedList = document.querySelector('#tasks')
    const innerElement = createLiElement(task)
    unorderedList.append(innerElement)
  }

  function createLiElement (innerText) {
    const liToAppend = document.createElement('li')
    liToAppend.innerText = innerText
    return liToAppend
  }
})
