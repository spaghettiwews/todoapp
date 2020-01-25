import React from "react";
import "./App.css";
import ToDo from "./ToDo";
import AddToDoForm from "./AddToDoForm";
import shortid from "shortid";

const todos = [];

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      newToDo: null,
      todos
    };

    this.addToDo = this.addToDo.bind(this);
    this.updateNewToDo = this.updateNewToDo.bind(this);
    this.completeToDo = this.completeToDo.bind(this);
    this.deleteToDo = this.deleteToDo.bind(this);
  }

  updateNewToDo = event => {
    this.setState({
      newToDo: {
        id: shortid.generate(),
        title: event.target.value.trim(),
        completed: false
      }
    });
  };

  addToDo = event => {
    event.preventDefault();
    if (this.state.newToDo !== null && this.state.newToDo.title.trim() !== "") {
      let updatedToDos = this.state.todos;
      updatedToDos.push(this.state.newToDo);
      this.setState({ newToDo: null, todos: updatedToDos });
      event.target.reset();
    }
  };

  /* toggles todo completed status */
  completeToDo = id => {
    let updatedToDos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    this.setState({ newToDo: null, todos: updatedToDos });
  };

  /* delete/filter out todos */
  deleteToDo = id => {
    let updatedToDos = this.state.todos.filter(todo => id !== todo.id);
    this.setState({ newToDo: null, todos: updatedToDos });
  };

  render() {
    return (
      <div className="App">
        <h1 className="site--title">tomorrow</h1>
        <span className="site--tagline">
          a mystical land where 99% of all human productivity, motivation and
          achievement is stored.
        </span>
        <AddToDoForm
          addToDo={this.addToDo}
          updateNewToDo={this.updateNewToDo}
        />
        <div
          className={`todos${this.state.todos.length === 0 ? " empty" : ""}`}
        >
          <ul className="incomplete">
            {this.state.todos.map(item => {
              if (!item.completed) {
                return (
                  <ToDo
                    key={item.id}
                    {...item}
                    completeToDo={this.completeToDo}
                    deleteToDo={this.deleteToDo}
                  />
                );
              }
            })}
          </ul>
          <ul className="complete">
            {this.state.todos.map(item => {
              if (item.completed) {
                return (
                  <ToDo
                    key={item.id}
                    {...item}
                    completeToDo={this.completeToDo}
                    deleteToDo={this.deleteToDo}
                  />
                );
              }
            })}
          </ul>
        </div>
      </div>
    );
  }
}
