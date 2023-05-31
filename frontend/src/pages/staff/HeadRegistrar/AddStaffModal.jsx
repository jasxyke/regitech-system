import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { BiShow } from "react-icons/bi";

// THE FUNCION FOR THE ADD STAFF MODAL (EXCLUDING THE TRIGGER)

function AddModal(modalAdd) {
  return (
    <>
      <Modal
        size="lg"
        show={modalAdd.show}
        onHide={modalAdd.handleClose}
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
                <select className="form-select" name="roles" id="roleSelection">
                  <option selected disabled>
                    Select Role{" "}
                  </option>
                  <option value="1"> Regular Staff </option>
                  <option value="2"> Student Assistant </option>
                  <option value="3"> Head Registrar </option>
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
                  name="FName"
                  id="firstname"
                  placeholder="e.g. Juan"
                  required
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
                  name="MName"
                  id="middlename"
                  placeholder="e.g. Diosdado "
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
                  name="LName"
                  id="lastname"
                  placeholder="e.g. Dela Cruz"
                  required
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
                  name="PWord"
                  id="password"
                  placeholder="(8-16 characters)"
                  required
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
                  name="CfrmPass"
                  id="cfrmPass"
                  placeholder=""
                  required
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
          <Button className="px-5" variant="primary">
            Add
          </Button>
          <Button
            className="px-5"
            variant="secondary"
            onClick={modalAdd.handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddModal;
