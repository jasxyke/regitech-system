const SignupForm = () => {
  return (
    <div>
      <form>
        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="emailad"
            placeholder="Email Address"
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="password"
            className="form-control"
            id="confirm password"
            placeholder="Confirm Password"
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="firstname"
            placeholder="Firstname"
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="midname"
            placeholder="Middlename"
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type="text"
            className="form-control"
            id="lastname"
            placeholder="Lastname"
          />
        </div>

        <div className="form-group px-5 mb-2 text-center">
          <select className="form-select" aria-label="Default select example">
            <option selected>Course</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>

        <div className="form-group px-5 mb-2 text-center">
          <select className="form-select" aria-label="Default select example">
            <option selected>Year Admitted</option>
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
