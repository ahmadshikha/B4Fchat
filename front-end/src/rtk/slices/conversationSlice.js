import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";

export const getConversations = createAsyncThunk('conversationSlice/getConversations' , async () => {
  const res = await fetch('http://localhost:1337/api/functions/getConversations',{
    method: 'POST',
    headers:{
      'X-Parse-REST-API-Key': 'restAPIKey',
      'X-Parse-Application-Id': 'appId',
      'X-Parse-Session-Token': 'r:4178c4c898d6b47790e080f75321febd'
    }
  })
  const data = await res.json()
  console.log(data,"meo");
    return data.result.conversations.map((conversation,index) => {return{
      id: conversation.objectId,
      name: conversation.users[0].username,
      msg: data.result.msgs[index].text,
      date: data.result.msgs[index].createdAt.split("T")[1].slice(0,2)+"h",
    }})
})
const conversationSlice = createSlice({
  initialState: {
    conversations:[],
    chatId: null
  },
  name: 'conversationSlice',
  reducers: {
    startChatting:(state,action)=>{
      state.chatId = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getConversations.fulfilled , (state , action) => {
      return {...state,conversations:action.payload}
    })
  }
})

export const {startChatting} = conversationSlice.actions
export default conversationSlice.reducer