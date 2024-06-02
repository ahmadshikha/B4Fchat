import React, { useState } from 'react'
import Chat from '../Components/Chat'
import Contact from '../Components/Contact'

function HomePage() {
 
  return (
    <div className='h-full flex flex-col'>
      <Contact />
      <Chat/>
    </div>
  )
}

export default HomePage
