import React from 'react';

class AddToDoForm extends React.Component {
    render() { 
        return (  
            <form onSubmit={this.props.addToDo}>
                <label>Task name:<br/><input name="title" type="text" onChange={this.props.updateNewToDo}/></label>
                <button type="submit">Create task</button>
            </form>
        );
    }
}
 
export default AddToDoForm;