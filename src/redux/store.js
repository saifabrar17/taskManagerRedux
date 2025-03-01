import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from './features/tasks/tasksSlice';
import userSlice from './features/tasks/tasksSlice';

const store = configureStore({
    reducer: {
        tasksSlice: tasksSlice,
        userSlice: userSlice,
    },
});

export default store;