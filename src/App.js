import React from 'react';
import './App.css';
import ToDo from './ToDo';
import AddToDoForm from './AddToDoForm';
import shortid from 'shortid';

const todos = [];

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      newToDo: null,
      todos
    }

    this.addToDo = this.addToDo.bind(this);
    this.updateNewToDo = this.updateNewToDo.bind(this);
    this.dismissToDo = this.dismissToDo.bind(this);
  }

  updateNewToDo = (event) => {
    this.setState({
      newToDo: {id:shortid.generate(), title:event.target.value.trim(), completed:false}
    })
  }
  
  addToDo = (event) => {
    event.preventDefault();
    if (this.state.newToDo !== null && this.state.newToDo.title.trim() !== '') {
      let updatedToDos = this.state.todos;
      updatedToDos.push(this.state.newToDo);
      this.setState({newToDo:null, todos: updatedToDos});
      event.target.reset();
    }
  }
  
  dismissToDo = (id) => {
    // console.log(id);

    /* v.0.1 deletes/filters out completed todos */
    //let updatedToDos = this.state.todos.filter(todo => id !== todo.id); 

    /* v.0.2 toggles todo status */
    let updatedToDos = this.state.todos.map(todo => {
      if (id === todo.id) {
        todo.completed = !todo.completed;
      }
      return todo;
    })
    this.setState({newToDo:null, todos: updatedToDos});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.todos.map((item) => <ToDo key={item.id} {...item} dismissToDo={this.dismissToDo}/>)}
        </ul>
        <AddToDoForm addToDo={this.addToDo} updateNewToDo={this.updateNewToDo}/>
      </div>
    );
  }
}
