import React from 'react';

class ToDo extends React.Component {
    render() { 
        return ( 
        <li className={this.props.completed ? 'complete': 'incomplete'}>
            <label>

                <input 
                type="checkbox" 
                value={this.props.title}
                onChange={()=>{this.props.dismissToDo(this.props.id)}} />

                {this.props.title}

            </label>
        </li>
         );
    }
}
 
export default ToDo;