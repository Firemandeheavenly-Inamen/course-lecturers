import React from 'react'
import { Sidebar } from "./sidebar";

function Schedules() {
  return (
    <div className=" flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">Schedules</div>
    </div>
  );
}

export default Schedules;