import React from 'react'
import SidebarTop from '../Components/SidebarTop';
import Sidebar from '../Components/Sidebar';
import Chat from '../Components/Chat'
import Contact from '../Components/Contact'

function HomePage() {
 
  return (
    <div className='flex'>
    <div className='hidden md:flex flex-col h-screen w-1/4'>
      <SidebarTop/>
      <Sidebar/>

    </div>
    <div className='h-screen overflow-auto flex-grow'>
      <Contact />
      <Chat/>
    </div>
    </div>
  )
}

export default HomePage
