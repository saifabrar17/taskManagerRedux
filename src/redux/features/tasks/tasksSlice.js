import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    tasks : [],
}
const tasksSlice = createSlice({
    name: "tasksSlice",
    initialState,
    reducer:{},
});

export default tasksSlice.reducer;