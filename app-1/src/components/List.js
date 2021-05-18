import React from 'react'
import Todo from './ToDo'

const List = (props) => {
   return (
    <div>
      <p>List</p>
      <div>
        {props.toDos.map((task, index) => {
          return (
            <Todo task={task} key={index}/>
          )
        })}
      </div>
    </div>    
   ) 
}

export default List