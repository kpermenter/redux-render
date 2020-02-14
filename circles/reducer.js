const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

// create deep clone "hack"
function deepClone(someObject) {
    return JSON.parse(JSON.stringify(someObject));
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    if (type === "ADD_CIRCLE") {     
        //make a copy of state and add circle to the copy
        let newState = deepClone(state);

        newState.push({
            radius: 30,
            color: "#000000"
        })

        return newState;

    } else {

    return state;
    }
}