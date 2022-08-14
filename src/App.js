
import { Routes, Route } from "react-router-dom";
import AddLecturer from './components/addLecturer';
import Lecturers from "./components/lecturers";
import Courses from "./components/courses";
import Schedules from "./components/schedules";
import Settings from "./components/settings";
import { Sidebar } from "./components/sidebar";

function App() {
  return (
    <div>
      
      <div className=" flex min-h-screen">
      <Sidebar />
      <Routes>
        <Route path="/" element={<AddLecturer />}></Route>
        <Route path="/lecturers" element={<Lecturers />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/schedules" element={<Schedules />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        
      </Routes>
      </div>
    </div>
  );
}

export default App;
