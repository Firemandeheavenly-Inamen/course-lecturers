import React from 'react'
import { Sidebar } from "./sidebar";

function Settings() {
  return (
    <div className=" flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">Settings</div>
    </div>
  );
}

export default Settings