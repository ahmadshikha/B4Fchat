import React from 'react'
import SidebarTop from '../Components/SidebarTop';
import Sidebar from '../Components/Sidebar';
// import React, { useState } from 'react'
import Chat from '../Components/Chat'
import Contact from '../Components/Contact'

function HomePage() {
 
  return (
    <div>
      <SidebarTop/>
      <Sidebar/>
      <Contact />
      <Chat/>
    </div>
  )
}

export default HomePage
