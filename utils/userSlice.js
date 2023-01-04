import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null
}

const userSlice = createSlice({
  name: "loggeduser",
  initialState,
  reducers: {
    login: (state, action) =>{
        state.user = action.payload
    },
    logout: (state) =>{
        state.user = null
    }
  }
});

export const {login, logout} = userSlice.actions

export const selectuser = (state) =>state.user.user



export default userSlice.reducer