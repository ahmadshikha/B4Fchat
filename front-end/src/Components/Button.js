import React from 'react'

function Button({text}) {
  return (
    <div>
      <input type='submit' 
        className='bg-blue-300 h-12 my-4 px-72 pt-3 pb-8 
        rounded-2xl text-white font-medium
        md:bg-green-600 md:px-72 md:pb-4 md:pt-3 md:mb-10'
        value={text}/>
        
    </div>
  )
}

export default Button
