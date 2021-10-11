import React from "react";
import Todo from "./TODO";
function TODOLIST( {todos}){
    return (
      <ul>
        {
          todos.map (todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
        
      </ul>
    );

}

export default TODOLIST;
