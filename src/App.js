import './App.css';
import {BrowserRouter as Router, Routes, Route}  from 'react-router-dom'
import AddLecturer from './components/addLecturer';
import Lectures from './components/lectures';
import SideBar from './components/sidebar';

function App() {
  return (
    <Router><div className="App">
      <SideBar/>
    <Routes>
    <Route path="/" element ={<AddLecturer/>} />
    <Route path="/lectures" element ={<Lectures/>} />
      </Routes>
      </div>
</Router>
 
  );
}

export default App;
