import React, { useState } from "react";
import SidebarTop from "../Components/SidebarTop";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import Contact from "../Components/Contact";
import { useSelector } from "react-redux";
import HomeDefault from "../Components/HomeDefault";
function HomePage() {
  const [showConversations, setShowConversations] = useState(false);
  const chatId = useSelector((state) => state.conversations.chatId);

  return (
    <div className="flex">
      <div className={`${!chatId ? "w-[29%]":"w-[75%]"} hidden md:flex flex-col h-screen `}>
        <SidebarTop
          showConversations={showConversations}
          setShowConversations={setShowConversations}
        />
        <Sidebar showConversations={showConversations} />
      </div>
      <div className="h-screen overflow-auto flex-grow">
        {chatId ? (
          <>
            <Contact />
            <Chat />
          </>
        ) : (
          <HomeDefault />
        )}
      </div>
    </div>
  );
}

export default HomePage;
