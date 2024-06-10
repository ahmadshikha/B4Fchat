import {  createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  initialState: {
    token:null
  },
  name: 'userSlice',
  reducers: {
    login:(state,action)=>{
      state.token = action.payload
    }
  },
  
})

export const {login} = userSlice.actions
export default userSlice.reducer