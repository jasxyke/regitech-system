import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";
import useResetPassword from "../../hooks/useResetPassword";

export const SetPassForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [msg, setMsg] = useState("");

  const queryParams = new URLSearchParams(window.location.search);

  const email = queryParams.get("email");
  const token = queryParams.get("token");
  console.log(email);
  const handleError = (msg) => {
    setError(msg);
  };

  const handleResponse = (msg) => {
    setMsg(msg);
  };

  const { resetPassword, loading } = useResetPassword({
    handleError,
    handleResponse,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword(email, token, password, confirmPassword);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <div>
      <div className="px-5">
        {error && <div className="alert alert-danger">{error}</div>}
        {msg && (
          <div className="alert alert-success">
            {msg}
            {"\n"}{" "}
            <Link to={"/"}>Click here to go back to the login page.</Link>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-group px-5 mb-2">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <div className="form-group px-5 mb-2">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            id="confirm_password"
            placeholder="Confirm Password"
            name="password_confirmation"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
        </div>

        <div className="form-check px-5 d-flex justify-content-end">
          <input
            className="form-check-input"
            type="checkbox"
            checked={showPassword}
            onChange={toggleShowPassword}
            id="showPasswordCheckbox"
          />
          <label className="form-check-label" htmlFor="showPasswordCheckbox">
            Show password
          </label>
        </div>

        <div className="d-flex justify-content-center mt-3 mb-3">
          <button
            type="submit"
            className="btn btn-warning w-50"
            disabled={loading}
          >
            Reset Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default SetPassForm;
