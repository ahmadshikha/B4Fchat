import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { CiSearch } from "react-icons/ci";
import { PiPencilSimpleLine } from "react-icons/pi";
import ".././input.css";
import Conversation from "./Conversation";
import { useSelector } from "react-redux";

function SidebarTop({showConversations,setShowConversations}) {
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);
  const {token} = useSelector(state => state.users)

  useEffect(() => {
    async function fetchUsers() {
      const res = await fetch("http://localhost:1337/api/classes/_User", {
        headers: {
          "X-Parse-REST-API-Key": "restAPIKey",
          "X-Parse-Application-Id": "appId",
          "X-Parse-Session-Token": token,
        },
      });
      const data = await res.json();
      setUsers(data.results.map((user) => ({ name: user.username,id:user.objectId })));
    }
    fetchUsers();
  }, []);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    setSearchValue(searchTerm);
    if ( searchTerm !== "" ) {
      setShowConversations(true);
    } else {
      setShowConversations(false);
    }
  };

  const filteredNames = users.filter((user) =>
    user.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <>
    <div className="">
      <div className="flex justify-between mt-6 mx-3">
        <div>
          <span className="font-bold text-4xl ml-2">Chats</span>
        </div>
        <div className="w-20 flex items-center justify-around">
          <FontAwesomeIcon icon={faBars} className="size-5" />
          <PiPencilSimpleLine className="size-6" />
        </div>
      </div>
      <div className="mt-8 mb-2  mx-5  border-solid rounded-xl border-darkGray border-[0.1px]  flex justify-around items-center">
        <input
          className=" border-none border-0  w-9/12 h-14 active:border-none focus-visible:border-none outline-none "
          type="text"
          placeholder="Search a post"
          value={searchValue}
          onChange={handleSearch}
        />
        <CiSearch className="size-8" />
      </div>
    </div>
        {showConversations && (
          <ul>
            {filteredNames.map((user) => {
              return (
                <li key={user.id}>
                  <Conversation
                    id={user.id}
                    pic={"https://flowbite.com/docs/images/people/profile-picture-5.jpg"}
                    oStatus={false}
                    name={user.name}
                    msg={""}
                    date={""}
                    read={true}
                  />
                </li>
              );
            })}
          </ul>
        )}
        </>
  );
}

export default SidebarTop;







































































// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { CiSearch } from "react-icons/ci";
// import { PiPencilSimpleLine } from "react-icons/pi";
// import ".././input.css";
// import Conversation from "./Conversation";
// function SidebarTop() {
//   const [ searchValue , setSearchValue ] = useState('')
//   const [ showConversations , setShowConversations ] = useState(false)
//   const handleSearch = (e) => {
//     const searchTerm = e.target.value.toLowerCase()
//     setSearchValue(searchTerm)
//     if(searchTerm !== ''){
//       setShowConversations(true)
//     } else {
//       setShowConversations(false)
//     }
//   }
//   const filteredNames = getAllUsers.
//   filter((name) => name.toLowerCase().includes(searchValue.toLowerCase()))
//   const getAllUsers = async () => {
//     const res = await fetch('http://localhost:1337/api/classes/_User',{
//       headers:{
//         'X-Parse-REST-API-Key':'restAPIKey',
//         'X-Parse-Application-Id':'appId',
//         'X-Parse-Session-Token':'r:4178c4c898d6b47790e080f75321febd'
//       }
//     })
//     const data = await res.json()
//     return data.results.map((user)=>{
//       return{
//         name: user.username
//       }
//     })
//   } 
//   return (
//     <div className="">
//       <div className="flex justify-between mt-6 mx-3">
//         <div>
//           <span className="font-bold text-4xl ml-2">Chats</span>
//         </div>
//         <div className="w-20 flex items-center justify-around">
//           <FontAwesomeIcon icon={faBars} className="size-5" />
//           <PiPencilSimpleLine className="size-6" />
//         </div>
//       </div>
//       <div className="mt-8 mb-2  mx-5  border-solid rounded-xl border-darkGray border-[0.1px]  flex justify-around items-center">
//         <input
//           className=" border-none border-0  w-9/12 h-14 active:border-none focus-visible:border-none outline-none "
//           type="text"
//           placeholder="Search a post"
//           value={searchValue}
//           onChange={handleSearch}
//         />
//           {showConversations && (<ul>
//             {filteredNames.map((name) => {
//               return(
//                 <li key={name}>
//                   <Conversation name={name}/>
//                 </li>
//               )
//             })}
//           </ul>
//         )}
//         <CiSearch className="size-8" />
//       </div>
//     </div>
//   );
// }

// export default SidebarTop;
