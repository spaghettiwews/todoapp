import React from "react";

class ToDo extends React.Component {
  render() {
    return (
      <li>
        <label>
          <input
            type="checkbox"
            value={this.props.title}
            onChange={() => {
              this.props.completeToDo(this.props.id);
            }}
            checked={this.props.completed}
          />
          <span>{this.props.title}</span>
        </label>
        <button
          className="delete"
          type="button"
          onClick={() => {
            this.props.deleteToDo(this.props.id);
          }}
        >
          Delete
        </button>
      </li>
    );
  }
}

export default ToDo;
