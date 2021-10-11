import React from "react";

function TODO({todo}) {
  return (
    <div>
      <input type ="checkbox"/>
      <li> {todo.task} </li>
      <button>X</button>
    </div>
  );
}

export default TODO;
