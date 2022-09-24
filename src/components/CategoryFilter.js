import React from "react";
import { useState } from "react";

const CategoryFilter = (onFilterTask) => {
  const [filterBy, setFilterBy] = useState("All");
  // setFilterBy(e.target.value)

  //set category to be displayed first
  // const categoryDisplay=
  // function onFilterTask() {
  //   if (filterBy === "Code") {
  //     return console.log("nott");
  //   } else {
  //     console.log("not me");
  //   }
  // }

  return (
    <div className="categories">
      <h5>Category filters</h5>
    </div>
  );
};

export default CategoryFilter;
