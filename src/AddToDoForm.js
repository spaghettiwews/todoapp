import React from 'react';

class AddToDoForm extends React.Component {
    render() {
        return (
            <form onSubmit={this.props.addToDo}>
                <label><span>Task name: </span><input name="title" type="text" placeholder="Add a task" onChange={this.props.updateNewToDo} /></label>
                <button type="submit">Create task</button>
            </form>
        );
    }
}

export default AddToDoForm;