import React, { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

export const ResetLinkForm = () => {
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
