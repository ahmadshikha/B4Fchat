import React from 'react'
import SidebarTop from '../Components/SidebarTop';
import Sidebar from '../Components/Sidebar';

function HomePage() {
  return (
    <div className='h-screen bg-slate-600'>
      <SidebarTop/>
      <Sidebar/>
    </div>
  )
}

export default HomePage
