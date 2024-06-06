import React from 'react'

function Sidebar() {
  const user=[
    {id: 1, name:"John",ostutas:true, message:"hello",read:false},
    {id: 1, name:"malk",ostutas:false, message:"malek",read:true},
    {id: 1, name:"yazona",ostutas:false, message:"hello",read:true},
    {id: 1, name:"ahmad",ostutas:true, message:"hello",read:true},
    {id: 1, name:"ayooda",ostutas:false, message:"hello",read:false},
    {id: 1, name:"angoessa",ostutas:false, message:"hello",read:true},
    {id: 1, name:"byno",ostutas:true, message:"hello",read:false},
    {id: 1, name:"koko",ostutas:true, message:"hello",read:true},
    {id: 1, name:"abd",ostutas:true, message:"hello",read:true},


  ]
  return (
    <div  className="flex-grow  overflow-auto">
    {user.map(user => (
    <div key={user.id} className='flex justify-around items-center h-[4.50rem] m-2'>
      <div className="relative mx-3 ">
          <img className="w-14 h-14 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
          <span className={`bottom-0 left-10 absolute  w-3.5 h-3.5 ${user.ostutas?"bg-online": "bg-gray" }  border-2 border-white  rounded-full`}></span>
      </div>
      <div className='flex-grow'>
        <p className='text-2xl '>{user.name}</p>
        <span className='text-[#8E8E93]'>last massege</span>
      </div>
      <div className='h-full flex flex-col-reverse'>
        <span className='text-[#8E8E93] '>10 h</span>
      </div>
      <div className='mx-3'>
        <span className={`${user.read?'hidden':""} `}>🔴</span>
      </div>
        
    </div>
    ))}
  </div>
  )
}

export default Sidebar
