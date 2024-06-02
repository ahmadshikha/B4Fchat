import React from "react";
import { CiStar } from "react-icons/ci";
import SentMessage from "./SentMessage";
import ReceivedMessage from "./ReceivedMessage";
import { IoIosSend } from "react-icons/io";

function Chat() {
  return (
    <div className="relative flex flex-col ">
      <div className="sticky z-10 bg-white top-16 p-3 flex items-center justify-evenly border-darkGray border border-x-0">
        <CiStar className="size-7" />
        <h3 className="text-primary">Username</h3>
        <p className="text-gray">Pinned message body</p>
      </div>
      <div className="overflow-y-scroll break-words px-2 flex flex-col   bg-[#FAFAFA] ">
        <p className="text-gray mx-auto">May 21,2024</p>
        <SentMessage/>
        
      </div>
      <div className="sticky bottom-2 flex items-center w-full  ml-4 ">
        <input placeholder="Write your message..." className="px-2 h-16 mr-1 flex-grow border border-[#E5E5EA] rounded-2xl" type="text" />
        <button className="bg-primary p-3 mr-6 rounded-full text-white ">
          <IoIosSend className="size-8"/>
        </button>
      </div>
    </div>
  );
}

export default Chat;
