import React from 'react'
import { Sidebar } from "./sidebar";

function Courses() {
  return (
    <div className=" flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">Courses</div>
    </div>
  );
}

export default Courses