import React, {useState} from "react";
import { Form, Button } from "react-bootstrap";
import { IoMdSchool } from "react-icons/io";
import { GiTeacher } from "react-icons/gi";
import {BiBook} from 'react-icons/bi'
import {AiOutlineSchedule} from 'react-icons/ai'

const AddLecturer = () => {
  const [clicked1,setClicked1] = useState(true)
  const [clicked2,setClicked2] = useState(false)
  const [clicked3,setClicked3] = useState(false)
  const [clicked4,setClicked4] = useState(false)
  const toggleClick1 = () =>{
    setClicked1(true)
    setClicked2(false)
    setClicked3(false)
    setClicked4(false)
  }
  const toggleClick2 = () =>{
    setClicked2(true)
    setClicked1(false)
    setClicked3(false)
    setClicked4(false)
  }
  const toggleClick3 = () =>{
    setClicked3(true)
    setClicked1(false)
    setClicked2(false)
    setClicked4(false)
  }
  const toggleClick4 = () =>{
    setClicked4(true)     
    setClicked1(false)
    setClicked2(false)
    setClicked3(false)
  }
  return (
    <div className="lectureMain">
      <div className="navPane">
        <nav className="navOptions">
          <ul className="navItems">
          <li onClick={toggleClick1} className={clicked1?  'active':'navItem'}><div className="navItemPosition"><IoMdSchool className="navIcon"/>Add a Lecturer</div></li>
          <li onClick={toggleClick2} className={clicked2?  'active':'navItem'}><div className="navItemPosition"><GiTeacher className="navIcon"/>Lectures</div></li>
          <li onClick={toggleClick3} className={clicked3?  'active':'navItem'}><div className="navItemPosition"><BiBook className="navIcon"/>Course</div></li>
          <li onClick={toggleClick4} className={clicked4?  'active':'navItem'}><div className="navItemPosition"><AiOutlineSchedule className="navIcon"/>Schedule</div></li>
          </ul>
        </nav>
      </div>
      <div className="addLecturerPane">
        <h3 id="lecturerTitle">Add A Lecturer</h3>
        <p id="lecturerFill">Fill in the data for a lecturer.</p>
        <hr className="horizontalRuler" />
        <div className="fillField">
          <div className="eachField">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="detailsLabel">
                  Personal Details
                </Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Fill in the personal details of the lecturer
                </Form.Text>
                <br />
                <Form.Control
                  type="text"
                  className="detailsInput"
                  placeholder="Name"
                />
                <br />
                <Form.Control
                  type="text"
                  className="detailsInput secondDetails"
                  placeholder="Gender"
                />
              </Form.Group>
            </Form>
          </div>
          <div className="eachField nextField">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="detailsLabel">
                  Contact Details
                </Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Fill in the contact details of the lecturer
                </Form.Text>
                <br />
                <Form.Control
                  type="email"
                  className="detailsInput"
                  placeholder="Email"
                />
                <br />
                <Form.Control
                  type="text"
                  className="detailsInput secondDetails"
                  placeholder="Phone Number"
                />
              </Form.Group>
            </Form>
          </div>
          <div className="eachField nextField">
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="detailsLabel">
                  Qualification Details
                </Form.Label>
                <br />
                <Form.Text className="text-muted">
                  Fill in the qualification details of the lecturer
                </Form.Text>
                <br />
                <Form.Control
                  type="text"
                  className="detailsInput"
                  placeholder="Degree"
                />
                <br />
                <Form.Control
                  type="text"
                  className="detailsInput secondDetails"
                  placeholder="Masters"
                />
              </Form.Group>
            </Form>
          </div>
        </div>
        <hr className="bottomRuler" />
        <Button id="addLecturerBtn">Add Lecturer</Button>
      </div>
    </div>
  );
};

export default AddLecturer;
