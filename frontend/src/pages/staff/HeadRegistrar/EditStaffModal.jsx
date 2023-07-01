import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { roles } from "../../../data/constants";
import { useFormInput } from "../../../hooks/useFormInput";
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import AdminStyles from  "./AdminPage.module.css"


function EditModal({ show, handleClose, staff, handleEditStaff }) {
  const localRoles = [roles[1], roles[2]];

  const firstNameProps = useFormInput(staff.firstname);
  const lastNameProps = useFormInput(staff.lastname);
  const midNameProps = useFormInput(staff.midname || "");
  const emailProps = useFormInput(staff.email);
  const [roleId, setRoleId] = useState(staff.role_id);

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    firstNameProps.changeValue(staff.firstname);
    lastNameProps.changeValue(staff.lastname);
    midNameProps.changeValue(staff.midname || "");
    emailProps.changeValue(staff.email);
    setRoleId(staff.role_id);
  }, [staff]);

  const editedStaff = {
    id: staff.id,
    firstname: firstNameProps.inputProps.value,
    lastname: lastNameProps.inputProps.value,
    midname: midNameProps.inputProps.value,
    email: emailProps.inputProps.value,
    role_id: roleId,
  };

  const onError = (error) => {
    setError(error);
  };

  const onSuccess = (isSuccess) => {
    setSuccess(isSuccess);
  };

  
  return (
    <>
      <Modal
        size="lg"
        contentClassName={"" + AdminStyles.staff_modal}
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header 
          className={"px-4 " + AdminStyles.modal_header} 
          closeVariant="white" 
          closeButton
          onHide={() => {
            setSuccess(false);
            setError("");
          }}
        >
          <Modal.Title>
            <h5 className="my-auto py-1">Edit new user</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className={AdminStyles.modal_body}>
          {success && <Alert variant="success">Successfully edited user</Alert>}
          {!success && error !== "" && <Alert variant="danger">{error}</Alert>}
          <form>
            <div className="row px-4">
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
                    placeholder=""
                    required
                    {...firstNameProps.inputProps}
                  />
                </div>

                <div className="col mb-2">
                  <label htmlFor="middlename" className="form-label">
                    {" "}
                    Middle Name <span className={"text-muted " + AdminStyles.text_muted}>
                      {" "}
                      (Optional){" "}
                    </span>{" "}
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    name="midname"
                    id="middlename"
                    placeholder=""
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
                    placeholder=""
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
                    name="email"
                    id="email"
                    placeholder=""
                    required
                    {...emailProps.inputProps}
                  />
                </div>
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer className={"p-2 " + AdminStyles.modal_footer}>
          <Button
            className={AdminStyles.modal_btn_submit}
            id="password"
            type="submit"
            onClick={() => {
              setError("");
              handleEditStaff(editedStaff, onError, onSuccess);
            }}
          >
            Edit
          </Button>
          <Button
            className={AdminStyles.modal_btn_close}
            id="cfrm_password"
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

export default EditModal;
