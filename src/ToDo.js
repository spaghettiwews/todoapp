import React from 'react';

class ToDo extends React.Component {
    render() {
        return (
            <li className={this.props.completed ? 'complete' : 'incomplete'}>
                <label>

                    <input
                        type="checkbox"
                        value={this.props.title}
                        onChange={() => { this.props.completeToDo(this.props.id) }} />

                    {this.props.title}

                </label>
                <button
                    type="button"
                    onClick={() => { this.props.deleteToDo(this.props.id) }}>
                    Delete
                </button>
            </li>
        );
    }
}

export default ToDo;