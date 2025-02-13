import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    name: "Mir",
    email: "os",
    userTasks: [],
}

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {}
})

export default userSlice.reducer;