import React from "react";

const TaskItem = ({ taskObject, updateCompletion }) => {

  const toggleChecked = (event) => {
    if (event.target.attributes.checked === undefined) {
      event.target.attributes.checked = false;
    }
    if (!event.target.attributes.checked) {
      event.target.attributes.checked = true;
      event.target.nextSibling.classList.add("text-decoration-line-through");
      updateCompletion( taskObject.task, taskObject.id, true)
    } else {
      event.target.attributes.checked = false;
      event.target.nextSibling.classList.remove("text-decoration-line-through");
      updateCompletion( taskObject.task, taskObject.id, false)
    }
  };

  return (
    <div className="list-group-item">
      {/* {taskObject.isCompleted ? <input className="form-check-input mx-2" type="checkbox" checked /> : <input className="form-check-input mx-2" type="checkbox" />} */}
      <input
        className="form-check-input mx-2"
        type="checkbox"
        onChange={toggleChecked}
      />

      <span>{taskObject.task}</span>
    </div>
  );
};

export default TaskItem; 
