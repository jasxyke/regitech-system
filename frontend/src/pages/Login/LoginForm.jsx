import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loading, login } = useAuthContext();

  const onError = (error) => {
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //palitan ang if dito forda database
    login(email, pass, onError);
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
            required
          />
        </div>
        <div className="form-group px-5">
          <input
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            type={showPassword ? "text" : "password"} // Use the showPassword state to toggle input type
            className="form-control"
            id="password"
            placeholder="Password"
            required
          />
        </div>
        <div className="form-check px-5 d-flex justify-content-end">
          {" "}
          {/* Add form-check class to the parent div */}
          <input
            className="form-check-input" // Add form-check-input class
            type="checkbox"
            checked={showPassword} // Bind the checkbox to the showPassword state
            onChange={() => setShowPassword(!showPassword)} // Toggle the showPassword state
            id="showPasswordCheckbox"
          />
          <label className="form-check-label" htmlFor="showPasswordCheckbox">
            {" "}
            Show password
          </label>
        </div>
        <div className="d-flex justify-content-center mt-3 mb-3">
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

export default LoginForm;
