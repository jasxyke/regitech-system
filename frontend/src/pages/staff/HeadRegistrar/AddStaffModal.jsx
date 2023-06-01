import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BiShow } from "react-icons/bi";
import { roles } from "../../../data/constants";
import { useFormInput } from "../../../hooks/useFormInput";
import { useState } from "react";

// THE FUNCION FOR THE ADD STAFF MODAL (EXCLUDING THE TRIGGER)

function AddModal({ show, handleClose, onAddUser }) {
  const localRoles = [roles[1], roles[2]];

  const firstNameProps = useFormInput("");
  const lastNameProps = useFormInput("");
  const midNameProps = useFormInput("");
  const emailProps = useFormInput("");
  const passProps = useFormInput("");
  const confirmPassProps = useFormInput("");
  const [roleId, setRoleId] = useState("1");

  const addedUser = {
    firstname: firstNameProps.value,
    lastname: lastNameProps.value,
    midname: midNameProps.value,
    email: emailProps.value,
    password: passProps.value,
    password_confirmation: confirmPassProps.value,
    role_id: roleId,
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
                  {...firstNameProps}
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
                  {...midNameProps}
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
                  {...lastNameProps}
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
                  {...emailProps}
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
                  {...passProps}
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
                  {...confirmPassProps}
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
            className="px-5"
            variant="primary"
            onClick={() => onAddUser(addedUser)}
          >
            Add
          </Button>
          <Button className="px-5" variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
