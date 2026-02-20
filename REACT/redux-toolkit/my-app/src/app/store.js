// you can place store in anything

import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
});        // takes object

// every application should have a single store

// store --> todoSlice