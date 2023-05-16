import React, { useState } from "react";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    //palitan ang if dito forda database
    if (email === "admin@gmail.com" && pass === "admin@gmail.com") {
    } else setError("Invalid Username or Password");
  };

  // suggested pwedeng improvement if ever useful. dagdag sa error message display if hindi registered sa database
  // "No account is registered with this email"

  return (
    <div>
      <div className="px-5">
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group px-5 mb-3">
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            className="form-control"
            id="Email"
            placeholder="Email"
          />
        </div>
        <div className="form-group px-5">
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
          <button type="submit" className="btn btn-warning w-50">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
