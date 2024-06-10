import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";




export const getConversations = createAsyncThunk('conversationSlice/getConversations' , async (_, { getState }) => {
  const {users} = getState()
  const token = users.token
  const name = users.name
  const res = await fetch('http://localhost:1337/api/functions/getConversations',{
    method: 'POST',
    headers:{
      'X-Parse-REST-API-Key': 'restAPIKey',
      'X-Parse-Application-Id': 'appId',
      'X-Parse-Session-Token': token
    }
  })
  if(res.ok){
    
    const data = await res.json()
      return data.result.userArray.map((conversation) => {
        let user;
        if(conversation.user.length==0)
          user = name
        else
          user = conversation.user[0].username
        return{
        id: conversation.id.objectId,
        name: user,
        msg: conversation.message.text,
        date: conversation.message.createdAt.split("T")[1].slice(0,2)+"h",
      }})
  }
})


export const getChat = createAsyncThunk('conversationSlice/getChat' , async (action, { getState }) => {
  const {users} = getState()
  const token = users.token
  const id = users.id
  const res = await fetch('http://localhost:1337/api/functions/getChat',{
    method: 'POST',
    headers:{
      'X-Parse-REST-API-Key': 'restAPIKey',
      'X-Parse-Application-Id': 'appId',
      'X-Parse-Session-Token': token
    },
    body: JSON.stringify({conversation:action})
  })

  if(res.ok){
    const data = await res.json()
    console.log(data,"sds");
    if(data.result.reciver.length==0){
      console.log("asdf");
      data.result.reciver.push({
    username:"you",
    objectId : id
    })      
    }
    return data.result
  }
})
const conversationSlice = createSlice({
  initialState: {
    conversations:[],
    chatId: null,
    chat: [],
    receiver: ""
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
    builder.addCase(getChat.fulfilled , (state , action) => {
      return {...state,chat: action.payload.msgs,receiver: action.payload.reciver[0]}
    })
  }
})

export const {startChatting} = conversationSlice.actions
export default conversationSlice.reducer