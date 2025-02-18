import { createSlice } from "@reduxjs/toolkit";

import React from 'react'

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value : 0},
    reducers: {
        increment(state) {
            state.value += 1
         },
        decrement(state) {
            state.value -= 1
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }
});

export const {increment, decrement, incrementByAmount} =counterSlice.actions;
export default counterSlice.reducer;



// Redux Toolkit allows us to mutate state directly inside reducers because it uses Immer.js, which manages immutability behind the scenes.

// Creates a slice with state (value) and reducers (increment, decrement, etc.).
// Automatically generates action creators (increment(), decrement(), etc.).
// Exports the reducer so it can be added to the Redux store.


