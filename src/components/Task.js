import React from "react";

function Task({ task }) {
  //
  return (
    <div className="task">
      <div className="label">
        <li key={task.category}>{task.text} </li>
      </div>
      <div className="text">{task.category}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
