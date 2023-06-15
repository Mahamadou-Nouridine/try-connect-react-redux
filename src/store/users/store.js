import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./usersSlice";

export default configureStore({
    reducer: reducer,
})