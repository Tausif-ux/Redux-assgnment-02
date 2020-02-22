const initialState = {
    persons: []
};

const reducer = (state=initialState, action) => {
    console.log('reducer running');
    switch (action.type) {
        
        case 'ADD_PERSON':
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
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