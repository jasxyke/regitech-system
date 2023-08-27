import React, { useState } from "react";
import { useFormInput } from "../../../hooks/useFormInput";
import { courses, years } from "../../../data/constants";
import FormContainer from "../../../components/forms/FormContainer";

const StudentAccountForm = ({ submitHandler }) => {
  const email = useFormInput("");
  const firstname = useFormInput("");
  const midname = useFormInput("");
  const lastname = useFormInput("");
  const [courseId, setCourseId] = useState(courses[0].id);
  const [yearAdmitted, setYearAdmitted] = useState(years[0]);

  const courseOptions = courses.map((course) => (
    <option key={course.id} value={course.id}>
      {course.name}
    </option>
  ));

  const yearOptions = years.map((year, index) => (
    <option key={index} value={year}>
      {year}
    </option>
  ));

  return (
    <div className="">
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          submitHandler();
        }}
      >
        <div className="row">
          <div className="col-sm-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="form-control"
              required
              {...email.inputProps}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="firstname" className="form-label">
              First name
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              className="form-control"
              required
              {...firstname.inputProps}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-sm-6">
            <label htmlFor="firstname" className="form-label">
              Middle name
            </label>
            <input
              type="text"
              name="midname"
              id="midname"
              className="form-control"
              {...midname.inputProps}
            />
          </div>
          <div className="col-sm-6">
            <label htmlFor="lastname" className="form-label">
              Last name
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              className="form-control"
              required
              {...lastname.inputProps}
            />
          </div>
          <div className="row mt-2">
            <div className="col-sm-6">
              <label htmlFor="course_id" className="form-label">
                Course
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="course_id"
                value={courseId}
                onChange={(e) => {
                  setCourseId(parseInt(e.target.value));
                }}
                required
              >
                <option disabled selected>
                  Course or Program
                </option>
                {courseOptions}
              </select>
            </div>
            <div className="col-sm-6">
              <label htmlFor="year_admitted" className="form-label">
                Year admitted
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="year_admitted"
                onChange={(e) => {
                  setYearAdmitted(e.target.value);
                }}
                required
              >
                <option disabled selected>
                  Please select year admitted
                </option>
                {yearOptions}
              </select>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default StudentAccountForm;
