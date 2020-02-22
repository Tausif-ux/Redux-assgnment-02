const initialState = {
    persons: []
};

const reducer = (state=initialState, action) => {

    switch (action.type) {
        
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: 'Max',
                age: Math.floor( Math.random() * 40 )
            };
            // const updatedPersons = [...state.persons];
            return {
                persons: state.persons.concat(newPerson),
            };
        
        case 'DELETE_PERSON':
            const updatedPersons = [...state.persons];
            updatedPersons.splice(action.personID, 1);    

            return {
                persons: state.persons.filter(person => person.id !== action.personID),
            };
    }

    return state;
};

export default reducer;