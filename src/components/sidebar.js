import React from "react";
import "boxicons";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <div className="  min-h-screen flex flex-row bg-gray-100 ">
      <div
        className=" flex flex-col w-56 bg-white  overflow-hidden"
        style={{ backgroundColor: "rgba(36,39,48,0.8)" }}
      >
        <ul className="flex flex-col py-4 mt-24">
          <li>
            <Link className="nav-text active" to="/">
              <a href="#" className="nav-items group">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400 ">
                  <box-icon
                    type="solid"
                    name="user-plus"
                    animation="tada-hover"
                    color="gray"
                  ></box-icon>
                </span>
                <span className="text-sm font-medium">Add lecturer</span>
              </a>
            </Link>
          </li>

          <li>
            <Link className="nav-text" to="/lecturers">
              <a href="#" className="nav-items">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <box-icon
                    type="solid"
                    name="user"
                    animation="tada-hover"
                    size="sm"
                    color="gray"
                  ></box-icon>
                </span>
                <span className="text-sm font-medium">Lecturers</span>
              </a>
            </Link>
          </li>
          <li>
            <Link className="nav-text" to="/courses">
              <a href="#" className="nav-items">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <box-icon
                    type="solid"
                    name="book"
                    animation="tada-hover"
                    color="gray"
                  ></box-icon>
                </span>
                <span className="text-sm font-medium">Courses</span>
              </a>
            </Link>
          </li>
          <li>
            <Link className="nav-text" to="/schedules">
              <a href="#" className="nav-items">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg decoration-white">
                  <box-icon
                    type="solid"
                    name="calendar"
                    animation="tada-hover"
                    size="sm"
                    color="gray"
                  ></box-icon>{" "}
                </span>
                <span className="text-sm font-medium">Schedule</span>
              </a>
            </Link>
          </li>

          <hr class="border-0 bg-gray-500 text-gray-500 h-px my-2 ml-10 mr-10 mt-6 mb-6"></hr>

          <li>
            <Link className="nav-text" to="/settings">
              <a href="#" className="nav-items">
                <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                  <box-icon
                    type="solid"
                    name="cog"
                    animation="tada-hover"
                    color="gray"
                  ></box-icon>
                </span>
                <span className="text-sm font-medium">Settings</span>
              </a>
            </Link>
          </li>
          <li>
            <a href="#" className="nav-items">
              <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400  ">
                <box-icon
                  color="gray"
                  type="solid"
                  name="log-out"
                  animation="tada-hover"
                ></box-icon>
              </span>
              <span className="text-sm font-medium">Log Out</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
