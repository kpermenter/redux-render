const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;  
    
    if (type === "ADDNAME") {
        // let newState = [...state, 'bob']

        //concats with given array returns NEW array - copy
        newState = state.concat(action.name)
        return newState;

    }  else {

        return state
    }
}