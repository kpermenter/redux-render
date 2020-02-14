const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 
const nameFormElement = document.getElementById("nameForm")
nameFormElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let nameInputElement = document.getElementById("nameInput")
    dispatch({ type: "ADDNAME", name: nameInputElement.value })
    nameInputElement.value = "";
})