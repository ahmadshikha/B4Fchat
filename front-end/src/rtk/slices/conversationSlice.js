import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

export const getConversations = createAsyncThunk('conversationSlice/getConversations' , async () => {
  const res = await fetch('http://localhost:1337/api/functions/getConversations',{
    method: 'POST',
    headers:{
      'X-Parse-REST-API-Key': 'restAPIKey',
      'X-Parse-Application-Id': 'appId',
      'X-Parse-Session-Token': 'r:b67b8d2ce787ef4040d5b7d6674d48d7'
    }
  })
  const data = await res.json()
    return data.result.conversations.map((conversation,index) => {return{
      id: conversation.objectId,
      name: conversation.users[0].username,
      msg: data.result.msgs[index].text,
      date: data.result.msgs[index].createdAt.split("T")[1].slice(0,2)+"h",
    }})
})

const conversationSlice = createSlice({
  initialState: [],
  name: 'conversationSlice',
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getConversations.fulfilled , (state , action) => {
      return action.payload
    })
  }
})

export const {} = conversationSlice.actions
export default conversationSlice.reducer