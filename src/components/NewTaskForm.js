import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onFilterTask }) {
  const [text, setText] = useState("");
  const categoryList = CATEGORIES.map((option) => <option>{option}</option>);

  function handleAddTask(e, text) {
    console.log(text);
    e.preventDefault();
    setText("");
  }

  return (
    <form className="new-task-form" onSubmit={handleAddTask}>
      <label>
        Details
        <input
          type="text"
          name="text"
          onChange={(e) => console.log(e.target.value)}
        />
      </label>
      <label>
        Category
        <select name="category">{categoryList}</select>
      </label>
      <input type="submit" />
    </form>
  );
}

export default NewTaskForm;
