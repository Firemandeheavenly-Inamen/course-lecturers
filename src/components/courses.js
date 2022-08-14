import React from 'react'
import { Sidebar } from "./sidebar";

function Courses() {
  return (
    
     
      <div className="flex-1 p-8">
        <div className="container mx-auto mt-12">
          {/* divider for speration of lines */}
          <div class="flex flex-col divide-y divide-y">
            {/* first div for divider (header side) */}
            <div className="page-header mb-6">
              <h2 className="text-3xl font-semibold ">Add A Course</h2>
              <span className="text-slate-500 ">
                Fill in the data of a Course
              </span>
            </div>

            {/* second div for divider (form side)*/}
            <div className="lecturer-form">
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  my-24">
                {/* this div is for the first form (personal details of lecturer) */}
                {/* ------------------------------------------------------------------------------- */}
                <div class="personal-details">
                  <div class="form-title">
                    <h1 className=" font-bold">Course Details</h1>
                    <span className="text-slate-500 text-sm">
                      Enter Course Details
                    </span>
                  </div>

                  <form class="w-full max-w-sm py-6">
                    <div class="flex items-center  py-2 ">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Course Name"
                        aria-label="Course name"
                      />
                    </div>
                  </form>
                  <form class="w-full max-w-sm ">
                    <div class="flex items-center   py-2">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Year Group"
                        aria-label="Year Group"
                      />
                    </div>
                  </form>
                </div>
                {/* ------------------------------------------------------------------------------- */}

              
                {/* ------------------------------------------------------------------------------- */}

                <div class="Qualification Details">
                  <div class="form-title">
                    <h1 className=" font-bold">Other Details</h1>
                    <span className="text-slate-500 text-sm">
                      Other details pertaining to the COurse
                    </span>
                  </div>

                  <form class="w-full max-w-sm py-6">
                    <div class="flex items-center   py-2">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Course Type"
                        aria-label="Course Type"
                      />
                    </div>
                  </form>
                  <form class="w-full max-w-sm">
                    <div class="flex items-center  py-2">
                      <input
                        className="form-control "
                        type="text"
                        placeholder="Number Of Students"
                        aria-label="Number Of Students"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>

            {/* third div for divider (button side)*/}
            <div className="lsubmit-btn">
              <button type="button" className=" add-lecturer-btn">
                Add Course
              </button>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Courses