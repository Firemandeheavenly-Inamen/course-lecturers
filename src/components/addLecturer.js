import { Sidebar } from "./sidebar";
import {useState} from 'react'
function AddLecturer() {
  const [lecturerDetails,setLecturerDetails]= useState({
    fullname : '',
    gender : '',
    email: '',
    phoneNumber: '',
    degree: '',
    masters: '',
  })
  const postLecturerDetails=()=>{
    console.log(lecturerDetails)
  }
  return (
    <div className=" flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-8">
        <div className="container mx-auto mt-12">
          {/* divider for speration of lines */}
          <div class="flex flex-col divide-y divide-y">
            {/* first div for divider (header side) */}
            <div className="page-header mb-6">
              <h2 className="text-3xl font-semibold ">Add A Lecturer</h2>
              <span className="text-slate-500 ">
                Fill in the data of the lecturer
              </span>
            </div>

            {/* second div for divider (form side)*/}
            <div className="lecturer-form">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  my-24">
                {/* this div is for the first form (personal details of lecturer) */}
                {/* ------------------------------------------------------------------------------- */}
                <div class="personal-details">
                  <div class="form-title">
                    <h1 className=" font-bold">Personal Details</h1>
                    <span className="text-slate-500 text-sm">
                      Enter personal details of Lecturer
                    </span>
                  </div>

                  <form class="w-full max-w-sm py-6">
                    <div class="flex items-center  py-2 ">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Name"
                        aria-label="Full name"
                        value={lecturerDetails.fullname}
                        onChange= {e=> setLecturerDetails({...lecturerDetails, fullname: e.target.value})}
                      />
                    </div>
                  </form>
                  <form class="w-full max-w-sm ">
                    <div class="flex items-center   py-2">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Gender"
                        aria-label="Gender"
                        value={lecturerDetails.gender}
                        onChange= {e=> setLecturerDetails({...lecturerDetails, gender: e.target.value})}
                      />
                    </div>
                  </form>
                </div>
                {/* ------------------------------------------------------------------------------- */}

                <div class="contact-details">
                  <div class="form-title">
                    <h1 className=" font-bold">Contact Details</h1>
                    <span className="text-slate-500 text-sm">
                      Enter contact details of Lecturer
                    </span>
                  </div>

                  <form class="w-full max-w-sm py-6">
                    <div class="flex items-center   py-2">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Email"
                        aria-label="Email"
                        value={lecturerDetails.email}
                        onChange= {e=> setLecturerDetails({...lecturerDetails, email: e.target.value})}
                      />
                    </div>
                  </form>
                  <form class="w-full max-w-sm">
                    <div class="flex items-center   py-2">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Phone Number"
                        aria-label="Phone Number"
                        value={lecturerDetails.phoneNumber}
                        onChange= {e=> setLecturerDetails({...lecturerDetails, phoneNumber: e.target.value})}
                      />
                    </div>
                  </form>
                </div>
                {/* ------------------------------------------------------------------------------- */}

                <div class="Qualification Details">
                  <div class="form-title">
                    <h1 className=" font-bold">Qualification Details</h1>
                    <span className="text-slate-500 text-sm">
                      Enter qualification details of Lecturer
                    </span>
                  </div>

                  <form class="w-full max-w-sm py-6">
                    <div class="flex items-center   py-2">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Degree"
                        aria-label="Degree"
                        value={lecturerDetails.degree}
                        onChange= {e=> setLecturerDetails({...lecturerDetails, degree: e.target.value})}
                      />
                    </div>
                  </form>
                  <form class="w-full max-w-sm">
                    <div class="flex items-center  py-2">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Masters"
                        aria-label="Masters"
                        value={lecturerDetails.masters}
                        onChange= {e=> setLecturerDetails({...lecturerDetails, masters: e.target.value})}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* third div for divider (button side)*/}
            <div className="lsubmit-btn">
              <button onClick={postLecturerDetails} type="button" className=" add-lecturer-btn">
                Add Lecturer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddLecturer;

//   <button
//     class="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
//     type="button"
//   >
//     Sign Up
//   </button>;
