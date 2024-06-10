import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import { IoIosSend } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { getChat } from "../rtk/slices/conversationSlice";

function Chat() {
  const {chatId, chat, receiver } = useSelector((state) => state.conversations);
  console.log(receiver,"rec");
  const {token} = useSelector(state => state.users)
  const [msg,setMsg] = useState("")
  const dispatch = useDispatch()
  async function handleClick(){
    const res = await fetch("http://localhost:1337/api/classes/Msg",
      {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          'X-Parse-REST-API-Key': 'restAPIKey',
      'X-Parse-Application-Id': 'appId',
      'X-Parse-Session-Token': token
        },
        body:JSON.stringify({
          text:msg,
          reciver:{
            "__type":"Pointer",
            "className":"_User",
            "objectId":receiver.objectId
          }
        })
      }
    )
    if(res.ok){
      const data = await res.json()
      dispatch(getChat(chatId));
    }
  }

  return (
    <div className="relative flex flex-col flex-grow">
      <div className="sticky z-10 bg-white top-16 p-3 pl-20 flex items-center justify-start border-darkGray border border-x-0">
        <CiStar className="size-7 mr-10" />
        <h3 className="text-primary mr-10">Username</h3>
        <p className="text-gray">Pinned message body</p>
      </div>
      <div className=" break-words px-2 flex flex-col  flex-grow bg-[#FAFAFA] " style={{height:"72vh"}}>
        <p className="text-gray mx-auto">May 21,2024</p>
        {chat.map((msg) => {
          if (receiver.objectId == msg.reciver.objectId)
            return <SentMessage text={msg.text} time={msg.createdAt.split("T")[1].slice(0,2)}/>;
          else return <ReceivedMessage text={msg.text} time={msg.createdAt.split("T")[1].slice(0,2)}/> ;
        })}
      </div>
      <div className="sticky bottom-2 flex items-center w-[97%]  ml-4 ">
        <input
        value={msg}
        onChange={e=>setMsg(e.target.value)}
          placeholder="Write your message..."
          className="px-2 h-16 mr-1 flex-grow border border-[#E5E5EA] rounded-2xl"
          type="text"
        />
        <button onClick={handleClick} className="bg-primary p-3  rounded-full text-white ">
          <IoIosSend className="size-8" />
        </button>
      </div>
    </div>
  );
}

export default Chat;
