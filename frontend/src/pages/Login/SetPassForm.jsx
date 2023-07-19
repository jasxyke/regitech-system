import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export const SetPassForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loading, login } = useAuthContext();

  const onError = (error) => {
    setError(error);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password, onError);
  };

  const toggleShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

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
