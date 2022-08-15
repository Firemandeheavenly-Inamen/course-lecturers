import React, { useState } from "react";
import "boxicons";
import { HiMenuAlt3 } from "react-icons/hi";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { BsPeopleFill } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { MdDateRange } from "react-icons/md";
 import { RiSettings5Fill } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";


import { NavLink } from "react-router-dom";

export const Sidebar = () => {

  const [open,setOpen] =useState(true);


  return (
    <div className={ ` sticky left-0 top-0 h-screen flex flex-row bg-gray-100 `} >
      <div
        className={ `flex flex-col ${open ? 'w-56': 'w-16'} duration-500 bg-white sticky top-0 overflow-hidden`}
        style={{ backgroundColor: "rgba(36,39,48,0.8)" }}
      >
        <div className="py-3 flex justify-end px-4">
        <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            style={{color:"white"}}
            onClick={() => setOpen(!open)}
          />
      </div>
          
    <div className="navbar">
        <ul className="flex flex-col py-4 mt-24">
          <li  >
            <NavLink exact={true} className={({ isActive }) => isActive ? "nav-items active text-black" : "text-white "} to="/"  >
              <div class="navtext">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400 ">
                  {/* <box-icon
                    type="solid"
                    name="user-plus"
                    animation="tada-hover"
                    color="gray"
                  ></box-icon> */}

          <BsFillPersonPlusFill
            size={26}
            className="cursor-pointer"
            style={{color:"gray"}}
            // onClick={() => setOpen(!open)}
          />
                  
                </span>
                <span className={` navtext whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"} text-md   font-medium`}>Add lecturer</span>
              </div>
            </NavLink>
          </li>

          <li>
            <NavLink className={({ isActive }) => isActive ? "nav-items active text-black" : "text-white "}  to="/lecturers" >
            <div class="navtext">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  {/* <box-icon
                    type="solid"
                    name="user"
                    animation="tada-hover"
                    size="sm"
                    color="gray"
                  ></box-icon> */}
                   <BsPeopleFill
                    size={26}
                    className="cursor-pointer"
                    style={{color:"gray"}}
                    // onClick={() => setOpen(!open)}
                  />
                </span>
                <span className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"} text-md  font-medium`}>Lecturers</span>
             </div>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "nav-items active text-black" : "text-white "}  to="/courses"  >
            <div class="navtext">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  {/* <box-icon
                    type="solid"
                    name="book"
                    animation="tada-hover"
                    color="gray"
                  ></box-icon> */}
                  <ImBooks
                    size={26}
                    className="cursor-pointer"
                    style={{color:"gray"}}
                    // onClick={() => setOpen(!open)}
                  />
                 
                </span>
                <span className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"} text-md  font-medium`}>Courses</span>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className={({ isActive }) => isActive ? "nav-items active text-black" : "text-white "}  to="/schedules"  >
            <div class="navtext">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg decoration-white">
                  {/* <box-icon
                    type="solid"
                    name="calendar"
                    animation="tada-hover"
                    size="sm"
                    color="gray"
                  ></box-icon>{" "} */}
                  <MdDateRange
                    size={26}
                    className="cursor-pointer"
                    style={{color:"gray"}}
                    // onClick={() => setOpen(!open)}
                  />
                  
                </span>
                <span className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"} text-md  font-medium`}>Schedule</span>
             </div>
            </NavLink>
          </li>

          <hr class="border-0 bg-gray-500 text-gray-500 h-px my-2 ml-10 mr-10 mt-6 mb-6"></hr>

          <li>
            <NavLink className={({ isActive }) => isActive ? "nav-items active text-black" : "text-white "}  to="/settings"  >
            <div class="navtext">
                <span className=" inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  {/* <box-icon
                    type="solid"
                    name="cog"
                    animation="tada-hover"
                    color="gray"
                  ></box-icon> */}
                  
                  <RiSettings5Fill
                    size={26}
                    className="cursor-pointer"
                    style={{color:"gray"}}
                    // onClick={() => setOpen(!open)}
                  />
                </span>
                <span className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"} text-md   font-medium`}>Settings</span>
              </div>
            </NavLink>
          </li>
          <li>
          <div class="navtext">

              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400  ">
                {/* <box-icon
                  color="gray"
                  type="solid"
                  name="log-out"
                  animation="tada-hover"
                ></box-icon> */}
                <FiLogOut
                    size={26}
                    className="cursor-pointer"
                    style={{color:"gray"}}
                    // onClick={() => setOpen(!open)}
                  />
              </span>
              <span className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"} text-md text-white font-medium`}>Log Out</span>
              <span className={`${open && "hidden"} absolute left-48 bg-gray-200 font-medium whitespace-pre text-black rounded-md drop-shadow-lg py-0 px-0
              w-0 overflow-hidden hover:px-2`}>
                Log out</span>
           </div>
          </li>
        </ul>
        </div>
      </div>
    </div>
  );
};
