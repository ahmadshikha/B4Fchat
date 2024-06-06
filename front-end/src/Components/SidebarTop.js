import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import ".././input.css";



function SidebarTop() {
  return (
    <div className="">
      <div className="flex justify-between my-6 mx-4">
        <div>
          <span className="font-bold text-4xl ml-2">Chat</span>
        </div>
        <div className="w-20 flex items-center justify-around">
          <FontAwesomeIcon icon={faBars} />
          <FontAwesomeIcon icon={faPen} />
        </div>
      </div>
      <div className="my-8  mx-6  border-solid rounded-xl border-black border-2  flex justify-around items-center">
      <input  
      className=" border-none border-0  h-10 active:border-none focus-visible:border-none outline-none "  
      type="text" 
      placeholder="Search a post"
       />
      <FontAwesomeIcon icon={faSearch} />
    </div>
    </div>
  );
}

export default SidebarTop;
