import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import useResetPassword from "../../hooks/useResetPassword";
import { Link, useNavigate } from "react-router-dom";

export const ResetLinkForm = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  const handleError = (msg) => {
    setError(msg);
  };

  const handleResponse = (msg) => {
    setMsg(msg);
  };

  const { sendResetLink, loading } = useResetPassword({
    handleError,
    handleResponse,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    sendResetLink(email);
    //palitan ang if dito forda database
  };

  // suggested pwedeng improvement if ever useful. dagdag sa error message display if hindi registered sa database
  // "No account is registered with this email"

  return (
    <div>
      <div className="px-5">
        {error && msg === "" && (
          <div className="alert alert-danger">{error}</div>
        )}
        {msg && <div className="alert alert-success">{msg}</div>}
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

        <div className="d-flex justify-content-center mt-3 mb-3">
          <button
            type="submit"
            className="btn btn-warning w-50"
            disabled={loading}
          >
            Send Password Reset Link
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetLinkForm;
