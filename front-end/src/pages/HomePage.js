import React, { useState } from "react";
import SidebarTop from "../Components/SidebarTop";
import Sidebar from "../Components/Sidebar";
import Chat from "../Components/Chat";
import Contact from "../Components/Contact";
import { useSelector } from "react-redux";
import HomeDefault from "../Components/HomeDefault";
import Slider from "../Components/Slider";


function HomePage() {
  const [showConversations, setShowConversations] = useState(false);
  const [showSlider , setShowSlider] = useState(false)

  const chatId = useSelector((state) => state.conversations.chatId);
  const getSlider = () => {
    setShowSlider(!showSlider)
  }
  return (
    <div className="flex">
      <div className={`w-[29%] hidden md:flex flex-col h-screen `}>
        {!showSlider ? 
        <>
        <SidebarTop
          showConversations={showConversations}
          setShowConversations={setShowConversations}
          getSlider={getSlider}
        />
        <Sidebar showConversations={showConversations} />
        </>
        :
        <Slider getSlider={getSlider}/>
        }
      </div>
      <div className="h-screen overflow-auto bg-[#FAFAFA] flex-grow">
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
