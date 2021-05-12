import React, { Component } from "react";

class CreateTask extends Component {
  state = {
    currentInputValue: "",
  };

  onInputChange = (e) => {
    this.setState({
      currentInputValue: e.target.value,
    });
  };

  onClickHandler = (e) => {
    e.preventDefault();
    const length = JSON.parse(localStorage.getItem('tasks')).length;
    this.props.onSubmitHandler(this.state.currentInputValue, length + 1, false );
    this.setState({currentInputValue : ''});
  };

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Add your tasks here"
          value={this.state.currentInputValue}
          onChange={(e) => this.onInputChange(e)}
        />
        <button
          className="btn btn-outline-secondary"
          onClick={this.onClickHandler}
        >
          Add Task
        </button>
      </div>
    );
  }
}

export default CreateTask;
