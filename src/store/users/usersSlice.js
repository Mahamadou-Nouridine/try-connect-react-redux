import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const apiUrl = 'https://randomuser.me/api/?results=5';

export const fetchUser = createAsyncThunk('users/fetchUsers', async (payload = undefined, thunkApi) => {
    try {
        const response = await fetch(apiUrl)
        const users = await response.json();
        return users.results
    } catch (error) {
        thunkApi.rejectWithValue(error)
    }
})

const initialState = {
    users:[],
    isLoading: false,
    error: undefined
}

export const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(fetchUser.pending, (state, action) => {
            state.isLoading = true;
        })

        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.users = action.payload
            state.isLoading = false;
        })
        
        builder.addCase(fetchUser.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.message;
        })
    }
})

export default userSlice
export const { actions, reducer } = userSlice