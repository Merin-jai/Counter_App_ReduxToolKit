import { configureStore } from "@reduxjs/toolkit";


const store = configureStore({
    reducer: {
        // Add your reducers here
        },
});

export default store




// The store.js file is responsible for setting up and configuring the Redux store, which acts as a centralized state management system for the React application.

// configureStore() is a function provided by Redux Toolkit that simplifies store creation.
// It automatically sets up Redux DevTools and includes built-in middleware like redux-thunk (for handling async operations)


// configureStore() takes an object with a reducer key.
// The reducer is an object where each slice of state is managed by its respective reducer.
// Here, we define a single reducer (counterReducer) under the key counter


// What Happens in This Store?
// Holds the entire application state.
// Listens for dispatched actions and updates the state accordingly.
// Allows React components to access the state via useSelector().
// Allows components to update the state via useDispatch().