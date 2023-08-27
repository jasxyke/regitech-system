import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import { courses, years } from "../../data/constants";
import { useAuthContext } from "../../context/AuthContext";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    password_confirmation: "",
    firstname: "",
    midname: "",
    lastname: "",
    course_id: courses[0].id,
    year_admitted: years[0],
    showPassword: false,
  });

  const { signup, loading } = useAuthContext();

  const [error, setError] = useState("");

  const onError = (error) => {
    console.log(error);
    console.log(typeof error);
    setError(error);
  };

  const onChangeHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const toggleShowPassword = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      showPassword: !prevFormData.showPassword,
    }));
  };

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

  const onSubmitHandler = (event) => {
    event.preventDefault();

    signup(formData, onError);
  };
  return (
    <div>
      {error !== "" && (
        <Alert className="" variant="danger">
          {error}
        </Alert>
      )}
      <form onSubmit={onSubmitHandler}>
        <div className="form-group px-5 mb-2">
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email Address"
            name="email"
            onChange={onChangeHandler}
            value={formData.email}
            required
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type={formData.showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
            required
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type={formData.showPassword ? "text" : "password"}
            className="form-control"
            id="confirm_password"
            placeholder="Confirm Password"
            name="password_confirmation"
            onChange={onChangeHandler}
            value={formData.password_confirmation}
            required
          />
        </div>

        <div className="form-check px-5 d-flex justify-content-end">
          <input
            className="form-check-input"
            type="checkbox"
            checked={formData.showPassword}
            onChange={toggleShowPassword}
            id="showPasswordCheckbox"
          />
          <label className="form-check-label" htmlFor="showPasswordCheckbox">
            Show password
          </label>
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Firstname"
            name="firstname"
            onChange={onChangeHandler}
            value={formData.firstname}
            required
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="midname"
            placeholder="Middlename"
            name="midname"
            onChange={onChangeHandler}
            value={formData.midname}
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Lastname"
            name="lastname"
            onChange={onChangeHandler}
            value={formData.lastname}
            required
          />
        </div>

        <div className="form-group px-5 mb-2 text-center">
          <select
            className="form-select"
            aria-label="Default select example"
            name="course_id"
            onChange={onChangeHandler}
            required
          >
            <option disabled selected>
              Course or Program
            </option>
            {courseOptions}
          </select>
        </div>

        <div className="form-group px-5 mb-2">
          <label htmlFor="year_admitted" className="form-label">
            Year admitted
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            name="year_admitted"
            onChange={onChangeHandler}
            required
          >
            <option disabled selected>
              Please select year admitted
            </option>
            {yearOptions}
          </select>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button
            type="submit"
            className="btn btn-warning w-50"
            disabled={loading}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
