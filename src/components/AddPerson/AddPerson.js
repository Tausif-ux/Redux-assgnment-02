import React, {Component} from 'react';

import './AddPerson.css';

class AddPerson extends Component {
    state = { 
        name: '',
        age: ''
    }

    nameChangeHandler = event => {
        this.setState({name: event.target.value});
    };

    ageChangeHandler = event => {
        this.setState({age: event.target.value});
    };
    
    render() {
        return ( 
            <div className="AddPerson">
                <input type="text" value={this.state.name} onChange={(event) => this.nameChangeHandler(event)} />
                <input type="text" value={this.state.age} onChange={(event) => this.ageChangeHandler(event)} />
                <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
            </div>
         );
    }
}
 
export default AddPerson;
