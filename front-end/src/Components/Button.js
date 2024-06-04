import React from 'react'

function Button({text , handleClick}) {
  return (
    <div>
      <input type='submit' 
        className='w-full bg-teal-500 text-white py-2 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:cursor-pointer'
        value={text} onClick={handleClick}/>
        
    </div>
  )
}

export default Button
