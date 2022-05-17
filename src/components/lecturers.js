import React from "react";
import { Sidebar } from "./sidebar";

function Lecturers() {
  return (
    <div className=" flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">lecturers</div>
    </div>
  );
}

export default Lecturers;
