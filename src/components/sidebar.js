import React, { useState } from "react";
import { IoMdSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import { BiBook } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import {Link} from 'react-router-dom'

const SideBar = () => {
  const [clicked1, setClicked1] = useState(true)
  const [clicked2, setClicked2] = useState(false)
  const [clicked3, setClicked3] = useState(false)
  const [clicked4, setClicked4] = useState(false)
  
  const toggleClick1 = ()=>{
    setClicked1(true)
    setClicked2(false)
    setClicked3(false)
    setClicked4(false)
  }
  const toggleClick2 = ()=>{
    setClicked2(true)
    setClicked1(false)
    setClicked3(false)
    setClicked4(false)
  }
  const toggleClick3 = ()=>{
    setClicked3(true)
    setClicked1(false)
    setClicked2(false)
    setClicked4(false)
  }
  const toggleClick4 = ()=>{
    setClicked4(true)
    setClicked1(false)
    setClicked3(false)
    setClicked2(false)
  }
  return (
    <div className="lectureMain">
      <div className="navPane">
        <nav className="navOptions">
          <ul className="navItems">
          <Link to="/">
              <li onClick={toggleClick1}
                className={clicked1? 'active':'navItem'}
              >
                <div className="navItemPosition">
                  <IoMdSchool className="navIcon" />
                  Add a Lecturer
                </div>
              </li>
              </Link>
            <Link to="/lectures">
              <li onClick={toggleClick2}
                className={clicked2? 'active': 'navItem'}
              >
                <div className="navItemPosition">
                  <GiTeacher className="navIcon" />
                  Lectures
                </div>
              </li>
            </Link>
            <li onClick={toggleClick3}
                className={clicked3? 'active': 'navItem'}
            >
              <div className="navItemPosition">
                <BiBook className="navIcon" />
                Course
              </div>
            </li>
            <li onClick={toggleClick4}
                className={clicked4? 'active': 'navItem'}
            >
              <div className="navItemPosition">
                <AiOutlineSchedule className="navIcon" />
                Schedule
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
