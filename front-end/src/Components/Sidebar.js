import React from 'react'

function Sidebar() {
  const user=[
    {id: 1, name:"John",ostutas:true, message:"hello"},
    {id: 1, name:"malk",ostutas:false, message:"malek"},
    {id: 1, name:"yazona",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},


  ]
  return (
    <div className="flex-grow bg-blue-500 overflow-auto">
    {user.map(user => (
    <div key={user.id} className='flex justify-around items-center h-20 bg-slate-600 m-2'>
      <div>
        <img className="w-14 h-14 rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt=""/>
      </div>
      <div>
        <p className=' ' style={{ fontSize:'25px' }}>{user.name}</p>
        <span>last massege</span>
      </div>
      <div>
        <span>10 h</span>
      </div>
      <div>
        <span>🔴</span>
      </div>
        
    </div>
    ))}
  </div>
  )
}

export default Sidebar
