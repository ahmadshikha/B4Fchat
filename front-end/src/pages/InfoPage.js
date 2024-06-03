import React from 'react'
import png from '../images/0px.png'
import Button from '../Components/Button'
function InfoPage() {
  return (
  <div className=' bg-slate-300 w-screen h-screen flex rounded-2xl flex-col px-16 items-center
  justify-center
  md:bg-slate-900 md:w-1/2 md:mx-auto'>
      <img src = {png}  className='rounded-xl w-56 py-6 px-3 mx-auto' alt='pretty girl' />
      <input type='text'
      placeholder='Full name' 
      className=' bg-slate-600 w-full h-16 rounded-2xl my-6 px-4 py-4 font-medium'/>

      <input type='email'
      placeholder='name@example.com'
      className=' bg-slate-600 w-full h-16 rounded-2xl my-6 px-4 py-4 font-medium'/>

<input type='email'
      placeholder='Date of Birth'
      className=' bg-slate-600 w-full h-16 rounded-2xl my-6 px-4 py-4 font-medium'/>

    <div className=' w-full mx-auto my-2  flex justify-around gap-12'>
    <input type='text'
    placeholder='City'
    className=' bg-slate-600 w-1/2 h-12 rounded-2xl my-6 py-4 px-4'/>

    <input type='text'
    placeholder='Area'
    className=' bg-slate-600 w-1/2 h-12 rounded-2xl my-6 py-4 px-4'/>

    </div>
        <Button text={"Sign in"}/>


    
  </div>
  )
}

export default InfoPage
