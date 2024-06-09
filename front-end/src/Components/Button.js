import React from 'react'

function Button(props) {
  return (
      <input type='submit' 
        className='w-full bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 hover:cursor-pointer'
        value = {props.text} onClick = {props.handleClick} />
        
  )
}

export default Button
