import React from 'react'
import { useEffect } from 'react'
import { useSelector , useDispatch } from 'react-redux'
import { getConversations } from '../rtk/slices/conversationSlice'
import Conversation from './Conversation'
function Sidebar() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getConversations())
    },[])
    const conversations = useSelector((state) => state.conversations)
    console.log(conversations,'mm');
  return(<div>
    {conversations.map((conversation)=>{
      return <Conversation id={conversation.id}
       name={conversation.name}
        msg={conversation.msg}
        date={conversation.date}
        pic={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
        />
    })}
  </div>
  )
  
}

export default Sidebar
