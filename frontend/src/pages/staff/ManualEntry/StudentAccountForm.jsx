import { useState } from "react";
import { courses, years } from "../../../data/constants";
import { useFormInput } from "../../../hooks/useFormInput";
import { clearTextInputs } from "../../../utils/InputFormClearer";

const StudentAccountForm = ({
  isFormResetted,
  hasNoEmail,
  onHasNoEmailChange,
}) => {
  const email = useFormInput("");
  const firstname = useFormInput("");
  const midname = useFormInput("");
  const lastname = useFormInput("");
  const [courseId, setCourseId] = useState("");
  const [yearAdmitted, setYearAdmitted] = useState("");

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

  if (isFormResetted) {
    clearTextInputs(email, firstname, midname, lastname);
    setCourseId("");
    setYearAdmitted("");
  }

  return (
    <div className="">
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
            disabled={hasNoEmail}
            required={!hasNoEmail}
            {...email.inputProps}
          />
          <div className="form-check">
            <input
              type="checkbox"
              name="hasNoEmail"
              id="hasNoEmail"
              className="form-check-input"
              value={hasNoEmail}
              onChange={(e) => {
                onHasNoEmailChange(!hasNoEmail);
              }}
            />
            <label htmlFor="hasNoEmail" className="form-check-label">
              No email
            </label>
          </div>
        </div>
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Please fill out this field.</div>
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
                setCourseId(e.target.value);
              }}
              required
            >
              <option value="" disabled={true}>
                -- Select the course or program
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
              aria-label="Year admitted"
              value={yearAdmitted}
              name="year_admitted"
              onChange={(e) => {
                setYearAdmitted(e.target.value);
              }}
              required
            >
              <option value="" disabled={true}>
                -- Select the year admitted of the student
              </option>
              {yearOptions}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAccountForm;
