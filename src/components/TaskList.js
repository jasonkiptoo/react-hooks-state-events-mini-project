import React from "react";
import Task from "./Task";
import { TASKS, CATEGORIES } from "../data";
import { useState } from "react";

const TaskList = (onDelete) => {
  const [taskList, setTaskList] = useState(TASKS);
  const [taskss] = useState(CATEGORIES);
  const [filterBy, setFilterBy] = useState("All");

  const taskToDisplay = taskList.filter(
    (task) => filterBy === "All" || task.category === filterBy
  );

  ///function to delete items from the list
  function onDelete(deletedTask) {
    setTaskList(taskList.filter((task) => task.text !== deletedTask));
  }

  const taskDisplay = taskToDisplay.map((task) => (
    <Task
      key={task.text}
      text={task.text}
      category={task.category}
      onDelete={onDelete}
    />
  ));

  return <div className="tasks">{taskDisplay}</div>;
};

export default TaskList;
