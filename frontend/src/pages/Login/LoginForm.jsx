const LoginForm = () => {
  return (
    <div>
      <form>
        <div className="form-group px-5 mb-3">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
          />
        </div>
        <div className="form-group px-5">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
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

export default LoginForm;
