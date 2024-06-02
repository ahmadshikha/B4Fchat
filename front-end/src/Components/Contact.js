import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { IoMdArrowBack } from "react-icons/io";

function Contact() {
  
  return (
    <div className='flex items-center justify-between px-4 py-3'>
      <div className='flex items-center'>
      <IoMdArrowBack  className='md:hidden size-6 mr-1'/>
        <div className="relative mr-2">
          <img className="w-10 h-10 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
          <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-online border-2 border-white  rounded-full"></span>
        </div>
        <div className='mt-1'>
          <h3 className='text-xl leading-4'>Yazan Alkhalil</h3>
          <p className='text-md text-gray-400'>Available</p>
        </div>
      </div>
      <CiSearch className='size-6'/>
    </div>
  )
}

export default Contact
