import React from "react";
import Task from "./Task";
import { TASKS } from "../data";
import { useState } from "react";

const TaskList = () => {
  const [taskList] = useState(TASKS);

  function taskDisplay(taskList) {
    return taskList.map((task) => {
      return <Task task={task} />;
    });
  }
  return <div className="tasks">{taskDisplay(taskList)}</div>;
};

export default TaskList;
