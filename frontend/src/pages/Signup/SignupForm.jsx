import React, { useState } from "react";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    cpassword: "",
    fname: "",
    mname: "",
    lname: "",
    course: "",
    year: "",
  });

  const [formError, setFormError] = useState({});

  const onChangeHandler = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
  };

  const validateForm = () => {
    let err = {};

    if (formData.fname === "") {
      err.fname = "First Name required!";
    }
    if (formData.mname === "") {
      err.mname = "Middle Name required!";
    }
    if (formData.lname === "") {
      err.lname = "Last Name required!";
    }
    if (formData.email === "") {
      err.email = "Email required!";
    } else {
      let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!regex.test(formData.email)) {
        err.email = "Email not valid!";
      }
    }

    if (formData.password === "" || formData.cpassword === "") {
      err.password = "Password and Confirm Password required!";
    } else {
      if (formData.password !== formData.cpassword) {
        err.password = "Password not matched!";
      } else {
        if (formData.password.length < 6) {
          err.password = "Password should be greater than 6 characters!";
        }
      }
    }

    if (formData.course === "") {
      err.course = "Course required!";
    }
    if (formData.year === "") {
      err.year = "Year Admitted required!";
    }

    setFormError({ ...err });

    return Object.keys(err).length < 1;
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    let isValid = validateForm();

    if (isValid) {
      alert("Submitted");
      // API call to server
    } else {
      const errorMessage = Object.values(formError).join(" ");
      alert(`Invalid Form: ${errorMessage}`);
    }
  };
  return (
    <div>
      <div className="px-5">
        {Object.keys(formError).length > 0 && (
          <div className=" alert alert-danger">
            {Object.values(formError).map((error, index) => (
              <div key={index}>{error}</div>
            ))}
          </div>
        )}
      </div>
      <form onSubmit={onSubmitHandler}>
        <div className="form-group px-5 mb-2">
          <input
            type="email"
            className="form-control"
            id="emailad"
            placeholder="Email Address"
            name="email"
            onChange={onChangeHandler}
            value={formData.email}
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={onChangeHandler}
            value={formData.password}
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="password"
            className="form-control"
            id="confirm password"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={onChangeHandler}
            value={formData.cpassword}
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Firstname"
            name="fname"
            onChange={onChangeHandler}
            value={formData.fname}
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="midname"
            placeholder="Middlename"
            name="mname"
            onChange={onChangeHandler}
            value={formData.mname}
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Lastname"
            name="lname"
            onChange={onChangeHandler}
            value={formData.lname}
          />
        </div>

        <div className="form-group px-5 mb-2 text-center">
          <select
            className="form-select"
            aria-label="Default select example"
            name="course"
            onChange={onChangeHandler}
            value={formData.course}
          >
            <option value="" disabled>
              Course
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="form-group px-5 mb-2 text-center">
          <select
            className="form-select"
            aria-label="Default select example"
            name="year"
            onChange={onChangeHandler}
            value={formData.year}
          >
            <option value="" disabled>
              Year Admitted
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="d-flex justify-content-center mt-3">
          <button type="submit" className="btn btn-warning w-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
