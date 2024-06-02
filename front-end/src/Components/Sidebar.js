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
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},
    {id: 1, name:"ahmad",ostutas:true, message:"hello"},

  ]
  return (
    <div className="flex-grow bg-blue-500 overflow-auto">
    {user.map(user => (
    <div key={user.id}>
       {user.name}
    </div>
    ))}
  </div>
  )
}

export default Sidebar
