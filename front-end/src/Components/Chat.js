import React from "react";
import { CiStar } from "react-icons/ci";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import { IoIosSend } from "react-icons/io";

function Chat() {
  return (
    <div className="flex flex-col flex-grow">
      <div className="p-3 flex items-center justify-evenly border-darkGray border border-x-0">
        <CiStar className="size-7" />
        <h3 className="text-primary">Username</h3>
        <p className="text-gray">Pinned message body</p>
      </div>
      <div className="break-words px-2 flex flex-col w-screen flex-grow bg-[#FAFAFA] ">
        <p className="text-gray mx-auto">May 21,2024</p>
        <SentMessage/>
        <ReceivedMessage/>
        <ReceivedMessage/>
      

      </div>
      <div className="fixed flex items-center w-full bottom-2 ml-4 ">
        <input placeholder="Write your message..." className="px-2 h-16 mr-1 flex-grow border border-[#E5E5EA] rounded-2xl" type="text" />
        <button className="bg-primary p-3 mr-6 rounded-full text-white">
          <IoIosSend className="size-8"/>
        </button>
      </div>
    </div>
  );
}

export default Chat;
