import React from "react";
import { Form, Button } from "react-bootstrap";

const AddLecturer = () => {

  return (
    <div className="lectureMain">
      <div className="lecturerPane">
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
