import React from 'react'
import waiting from '../images/waiting.jpg'
function HomeDefault() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <img  src={waiting}/>
      <h1 className='bg-stone-100 text-2xl p-2 rounded-xl'>select a chat to start messaging</h1>
    </div>
  )
}

export default HomeDefault
