import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

class Persons extends Component {

    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.personAddedHandler} />
                {this.props.pers.map(person => (
                    <Person 
                        key={person.id}
                        name={person.name} 
                        age={person.age} 
                        clicked={() => this.props.personDeletedHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        pers: state.persons,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        personAddedHandler: () => dispatch({ type: 'ADD_PERSON' }),
        personDeletedHandler: (id) => dispatch({ type: 'DELETE_PERSON', personID: id }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);