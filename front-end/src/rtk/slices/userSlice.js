import {  createSlice } from "@reduxjs/toolkit";



const userSlice = createSlice({
  initialState: {
    token:null,
    name:null,
    id:null
  },
  name: 'userSlice',
  reducers: {
    login:(state,action)=>{
      state.token = action.payload.token
      state.name = action.payload.name
      state.id = action.payload.id
    }
  },
  
})

export const {login} = userSlice.actions
export default userSlice.reducer