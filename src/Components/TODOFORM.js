import React, { useState } from "react";
import uuid from 'react-uuid'
function TODOFORM( {addTodo}) {
  const [todo, setTodo] = useState( {
    id: "",
    task: "",             // describe the task
    complete: false
  });

  function handleTaskInputChange(e) {
      setTodo({...todo, task:e.target.value });
  }

  function handleSubmit(e) {
      e.preventDefault();
      if(todo.task.trim()){
        addTodo({...todo, id: uuid.v4() });
        setTodo({...todo, task: "" });
      }
  }
  return (
    <form onSubmit = {handleSubmit}>
      <input
      name ="task"
      type ="text"
      value={todo.task}
      onchange = {handleTaskInputChange}/>
      <button type ="submit" />
    </form>
  );
}

export default TODOFORM;
