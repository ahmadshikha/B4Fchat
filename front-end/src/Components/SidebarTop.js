import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPen } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { CiSearch } from "react-icons/ci";
import { PiPencilSimpleLine } from "react-icons/pi";

import ".././input.css";

function SidebarTop() {
  return (
    <div className="">
      <div className="flex justify-between mt-6 mx-3">
        <div>
          <span className="font-bold text-4xl ml-2">Chat</span>
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
        />
        <CiSearch className="size-8" />
      </div>
    </div>
  );
}

export default SidebarTop;
