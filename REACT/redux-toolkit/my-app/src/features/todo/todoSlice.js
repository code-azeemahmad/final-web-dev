// A slice CONTAINS a reducer.
// nanoid method is provided to generate unique ids

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id: 1, text: "hello world"}]
}

// slices has names, library defined such as name
export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        // add properties or functions
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo);
        }, 
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id != action.payload);
        }, 
    }
})

// you have to export two parts of slice

export const {addTodo, removeTodo} = todoSlice.actions;     // export individual functionalities
export default todoSlice.reducer;       //  store needs to be awared with all reducers

// addTodo: (state, action) => {},      // always an access to state and action (predefined) 
// state = the current slice state 
// action = object that gets dispatched.