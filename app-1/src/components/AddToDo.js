import React, { useState } from 'react'

const AddToDo = (props) => {
  const [ input, setInput ] = useState('')

  const handleAddTask = () => {
    props.addToDoFn(input)
    setInput('')
  }

  return(
    <>
      <input
        placeholder='Add a todo!'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={() => handleAddTask()}>Add Task</button>
    </>
  )
}

export default AddToDo