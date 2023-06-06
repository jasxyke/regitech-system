import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BiShow } from "react-icons/bi";
import { roles } from "../../../data/constants";
import { useFormInput } from "../../../hooks/useFormInput";
import { useState } from "react";
import { clearTextInputs } from "../../../utils/InputFormClearer";
import { Alert } from "react-bootstrap";

// THE FUNCION FOR THE ADD STAFF MODAL (EXCLUDING THE TRIGGER)

function AddModal({ show, handleClose, onAddUser, loading }) {
  const localRoles = [roles[1], roles[2]];

  const firstNameProps = useFormInput("");
  const lastNameProps = useFormInput("");
  const midNameProps = useFormInput("");
  const emailProps = useFormInput("");
  const passProps = useFormInput("");
  const confirmPassProps = useFormInput("");
  const [roleId, setRoleId] = useState("2");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const addedStaff = {
    firstname: firstNameProps.inputProps.value,
    lastname: lastNameProps.inputProps.value,
    midname: midNameProps.inputProps.value,
    email: emailProps.inputProps.value,
    password: passProps.inputProps.value,
    password_confirmation: confirmPassProps.inputProps.value,
    role_id: roleId,
  };

  const clearForm = () => {
    clearTextInputs(
      firstNameProps,
      lastNameProps,
      midNameProps,
      emailProps,
      passProps,
      confirmPassProps
    );
    setRoleId("1");
  };

  const onError = (error) => {
    setError(error);
  };

  const onSuccess = (isSucess) => {
    setSuccess(isSucess);
  };
  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="my-auto py-1">Add new user</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {success && (
            <Alert variant="success">Successfully added new user</Alert>
          )}
          {!success && error !== "" && <Alert variant="danger">{error}</Alert>}
          <form className="row px-4" action="">
            <div className="col-md-6">
              <div className="col mb-2">
                <label htmlFor="roleSelection" className="form-label">
                  {" "}
                  Roles <span style={{ color: "red" }}> * </span>{" "}
                </label>
                <select
                  className="form-select"
                  name="role_id"
                  id="roleSelection"
                  value={roleId}
                  onChange={(e) => setRoleId(e.target.value)}
                >
                  {localRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col mb-2">
                <label htmlFor="firstname" className="form-label">
                  {" "}
                  First Name <span style={{ color: "red" }}> * </span>
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="firstname"
                  id="firstname"
                  placeholder="e.g. Juan"
                  required
                  {...firstNameProps.inputProps}
                />
              </div>

              <div className="col mb-2">
                <label htmlFor="middlename" className="form-label">
                  {" "}
                  Middle Name <span className="text-muted">
                    {" "}
                    (Optional){" "}
                  </span>{" "}
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="midname"
                  id="midname"
                  placeholder="e.g. Diosdado "
                  {...midNameProps.inputProps}
                />
              </div>

              <div className="col mb-2">
                <label htmlFor="lastname" className="form-label">
                  {" "}
                  Last Name <span style={{ color: "red" }}> * </span>
                </label>
                <input
                  type="name"
                  className="form-control"
                  name="lastname"
                  id="lastname"
                  placeholder="e.g. Dela Cruz"
                  required
                  {...lastNameProps.inputProps}
                />
              </div>
            </div>

            <div className="col-md-6">
              <div className="col mb-2">
                <label htmlFor="email" className="form-label">
                  {" "}
                  E-mail <span style={{ color: "red" }}> * </span>
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="FName"
                  id="email"
                  placeholder="e.g. juandelacruz@gmail.com"
                  required
                  {...emailProps.inputProps}
                />
              </div>

              <div className="col mb-2">
                <label htmlFor="password" className="form-label">
                  {" "}
                  Password <span style={{ color: "red" }}> * </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  id="password"
                  placeholder="(8-16 characters)"
                  required
                  {...passProps.inputProps}
                />
                <div className="my-1 ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="showPass"
                  />
                  <label
                    className="form-check-label mx-2 text-muted"
                    htmlFor="showPass"
                  >
                    Show password
                  </label>
                </div>
              </div>

              <div className="col mb-2">
                <label htmlFor="cfrmPass" className="form-label">
                  {" "}
                  Confirm Password <span style={{ color: "red" }}> * </span>
                </label>
                <input
                  type="password"
                  className="form-control"
                  name="password_confirmation"
                  id="cfrmPass"
                  placeholder=""
                  required
                  {...confirmPassProps.inputProps}
                />
                <div className="my-1 ms-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="showPassConfirm"
                  />
                  <label
                    className="form-check-label mx-2 text-muted"
                    htmlFor="showPassConfirm"
                  >
                    Show password
                  </label>
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className="py-2">
          <Button
            disabled={loading}
            className="px-5"
            variant="primary"
            onClick={() => {
              setError("");
              onAddUser(addedStaff, onError, onSuccess);
              if (success) {
                clearForm();
              }
            }}
          >
            Add
          </Button>
          <Button
            className="px-5"
            variant="secondary"
            onClick={() => {
              handleClose();
              setSuccess(false);
              setError("");
            }}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
