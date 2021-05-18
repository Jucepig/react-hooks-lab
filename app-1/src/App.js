import React, { useState } from 'react'
import './App.css';
import List from './components/List'
import AddToDo from './components/AddToDo'


function App() {
  const [ toDos, setToDos ] = useState(["Go Shopping", "Walk the dog", "Do My chores"])

  const addToDo = (task) => {
    setToDos([ task, ...toDos ])
  }

  return (
    <div className="App">
      <AddToDo addToDoFn={addToDo} />
      <List toDos={toDos} />
    </div>
  );
}

export default App;
