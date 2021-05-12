import React, { Component } from "react";

import TaskList from "./TaskList";
import CreateTask from "./CreateTask";

class App extends Component {
  state = {
    tasks: [],
    completed: [],
  };

  items = [
    { task: "Dinner date tonight", id: 1, isCompleted: false },
    { task: "Update the groceries", id: 2, isCompleted: false },
    { task: "Fuel up the vehicle", id: 3, isCompleted: true },
    { task: "Pay the electricity bill", id: 4, isCompleted: true },
    { task: "Call mum", id: 5, isCompleted: false },
    { task: "Meeting with Kevin Mittnick", id: 6, isCompleted: false },
  ];

  componentDidMount() {
    console.log("Componentdid mount called");

    let notes = localStorage.getItem("tasks");
    if (notes === null) {
      localStorage.setItem("tasks", JSON.stringify(this.items));
      this.setState({
        tasks: JSON.parse(localStorage.getItem("tasks")),
        completed: JSON.parse(localStorage.getItem("tasks")).filter(
          (element) => element.isCompleted
        ),
      });
    } else {
      this.setState({
        tasks: JSON.parse(localStorage.getItem("tasks")),
        completed: JSON.parse(localStorage.getItem("tasks")).filter(
          (element) => element.isCompleted
        ),
      });
    }
  }

  onSubmitHandler = (task, id, isCompleted) => {
    const taskArray = JSON.parse(localStorage.getItem("tasks"));
    taskArray.push({ task, id, isCompleted });
    localStorage.setItem("tasks", JSON.stringify(taskArray));

    this.componentDidMount();
  };

  updateCompletion = (task, id, isCompleted) => {
    console.log("You are at App.js update completion");
    let taskArray = JSON.parse(localStorage.getItem("tasks"));
    const index = id - 1;
    taskArray[index] = { id, task, isCompleted };
    localStorage.setItem("tasks", JSON.stringify(taskArray));

    this.componentDidMount();
  };

  render() {
    return (
      <div className="container-sm my-5">
        <h3 className="text-muted text-center">Todos for Today</h3>
        <TaskList
          tasks={!this.state.tasks ? this.items : this.state.tasks}
          completed={
            !this.state.completed
              ? this.items.filter((element) => element.isCompleted)
              : this.state.completed
          }
          updateCompletion={this.updateCompletion}
        />
        <CreateTask onSubmitHandler={this.onSubmitHandler} />
      </div>
    );
  }
}

export default App;
