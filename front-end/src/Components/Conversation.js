import React from 'react'
import { FaCircle } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { getChat, setReceiver, startChatting } from '../rtk/slices/conversationSlice';
import image from '../images/image.png'

function Conversation(props) {
  
  const dispatch = useDispatch()
  function handleClick(){
    dispatch(getChat(props.id));
    dispatch(startChatting({id:props.id,name:props.name,img:props.pic}))
    if(props.firstMessage){
      dispatch(setReceiver(props.id))
    }
  }
  return (
    <div onClick={() => handleClick()} className = "flex-grow  overflow-auto">
    <div key={props.id} className ='hover:bg-green-50 flex justify-around items-center h-[5.3rem]'>
      <div className="relative mx-5 ">
          <img className = "w-16 h-16 rounded-full" src = {props.pic?props.pic:image} alt = ""/>
          <span className={`bottom-0 left-10 absolute  w-3.5 h-3.5 ${props.oStatus?"bg-online": "bg-gray" }  border-2 border-white  rounded-full`}></span>
      </div>
      <div className = 'flex-grow'>
        <p className = 'text-2xl '>{props.name}</p>
        <span className = 'text-[#8E8E93]'>{props.msg}</span>
      </div>
      <div className = 'h-full flex flex-col-reverse'>
        <span className = 'text-[#8E8E93] mb-3 '>.{props.date}</span>
      </div>
      <div className = 'mx-3'>
        <span className = {`${props.read?'hidden':""} `}><FaCircle className = 'text-red-500 h-4' /></span>
      </div>
    </div>
  </div>
  )
}

export default Conversation
