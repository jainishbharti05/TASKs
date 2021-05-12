import React from "react";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, completed, updateCompletion }) => {
  const renderTask = tasks.map((task, id) => {
    return (
      <div key={id}>
        <TaskItem taskObject={task} updateCompletion = {updateCompletion}/>
      </div>
    );
  });

  const renderCompletedTask = completed.map((task, id) => {
    return (
      <div key={id}>
        <TaskItem taskObject={task} />
      </div>
    );
  });

  const showCompletedTask = (event) => {
    event.preventDefault();
    console.log(event.target.nextElementSibling);
    
  }

  return (
    <>
      <div className="container my-3 list-group">{renderTask}</div>
      <div className="dropdown">
        <button onClick = {showCompletedTask} className="btn btn-secondary btn-sm dropdown-toggle">
          Completed
        </button>
        <div className="container my-3 list-group">{renderCompletedTask}</div>
      </div>
    </>
  );
};

export default TaskList;
