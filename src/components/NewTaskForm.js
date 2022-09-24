import React, { useState } from "react";
import { CATEGORIES } from "../data";

function NewTaskForm({ onFilterTask }) {
  const [categories] = useState(CATEGORIES);

  const categoryList = CATEGORIES.map((option) => <option>{option}</option>);

  // const handleFilterChange = () => {
  //   onFilterTask(categories);
  // };

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">{categoryList}</select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
