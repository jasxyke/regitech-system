import { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import AlertResponse from "../../../components/ui/AlertResponse";
import PrimaryButton from "../../../components/ui/PrimaryButton";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { useFormInput } from "../../../hooks/useFormInput";
import { courseOptions, yearOptions } from "../../../utils/options";
import StudentCSS from "./StudentDashboard.module.css";
import Checkbox from "../../../components/forms/Checkbox";
import useMasterlist from "../../../hooks/useMasterlist";

const EditProfileModal = ({ student, updateStudent }) => {
  const formRef = useRef(null);
  const [invalidForm, setInvalidForm] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setResponse("");
    setError("");
    //cancels the changes that may have made after closing
    email.changeValue(student.user.email || "");
    firstname.changeValue(student.user.firstname);
    midname.changeValue(student.user.midname);
    lastname.changeValue(student.user.lastname);
    setCourseId(student.course_id);
    setYearAdmitted(student.year_admitted);
    setIsTransferee(student.student_status_id == "4");
  };
  const handleShow = () => setShow(true);

  const [response, setResponse] = useState("");
  const [error, setError] = useState("");

  const handleSuccess = (message, student) => {
    setResponse(message);
    updateStudent(student);
  };

  const handleError = (error) => {
    setError(error);
  };

  const masterlistHook = useMasterlist(handleError, handleSuccess);

  const email = useFormInput(student.user.email || "");
  const firstname = useFormInput(student.user.firstname);
  const midname = useFormInput(student.user.midname);
  const lastname = useFormInput(student.user.lastname);
  const [courseId, setCourseId] = useState(student.course_id);
  const [yearAdmitted, setYearAdmitted] = useState(student.year_admitted);
  const [isTransferee, setIsTransferee] = useState(
    student.student_status_id == "4"
  );

  const saveStudentProfile = (e) => {
    e.preventDefault();
    masterlistHook.updateStudentProfile(
      student.id,
      email.inputProps.value,
      firstname.inputProps.value,
      midname.inputProps.value,
      lastname.inputProps.value,
      courseId,
      yearAdmitted,
      isTransferee
    );
  };
  return (
    <>
      <div className={StudentCSS.editStudentInfoBtn}>
        <PrimaryButton
          text={"Edit student info"}
          onClick={() => {
            handleShow();
          }}
        />
      </div>
      <form
        action=""
        onSubmit={saveStudentProfile}
        className={invalidForm ? "was-validated" : ""}
        ref={formRef}
      >
        <Modal size="lg" show={show} onHide={handleClose} centered>
          <Modal.Header className="modalHead" closeVariant="white" closeButton>
            <Modal.Title>Edit student profile</Modal.Title>
          </Modal.Header>
          <form action="">
            <Modal.Body className="px-4 ">
              <AlertResponse response={response} error={error} />
              <div className="row">
                <div className="col-sm-6">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    disabled={
                      email.inputProps.value === null ||
                      email.inputProps.value === ""
                    }
                    required={
                      !(
                        email.inputProps.value === null ||
                        email.inputProps.value === ""
                      )
                    }
                    {...email.inputProps}
                  />
                </div>
                <div className="valid-feedback">Valid.</div>
                <div className="invalid-feedback">
                  Please fill out this field.
                </div>
                <div className="col-sm-6">
                  <label htmlFor="firstname" className="form-label">
                    First name
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="form-control"
                    required
                    {...firstname.inputProps}
                  />
                </div>
              </div>
              <div className="row mt-2">
                <div className="col-sm-6">
                  <label htmlFor="firstname" className="form-label">
                    Middle name
                  </label>
                  <input
                    type="text"
                    name="midname"
                    id="midname"
                    className="form-control"
                    {...midname.inputProps}
                  />
                </div>
                <div className="col-sm-6">
                  <label htmlFor="lastname" className="form-label">
                    Last name
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="form-control"
                    required
                    {...lastname.inputProps}
                  />
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6">
                    <label htmlFor="course_id" className="form-label">
                      Course
                    </label>
                    <select
                      className="form-select"
                      aria-label="Default select example"
                      name="course_id"
                      value={courseId}
                      onChange={(e) => {
                        setCourseId(e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled={true}>
                        -- Select the course or program
                      </option>
                      {courseOptions}
                    </select>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="year_admitted" className="form-label">
                      Year admitted
                    </label>
                    <select
                      className="form-select"
                      aria-label="Year admitted"
                      value={yearAdmitted}
                      name="year_admitted"
                      onChange={(e) => {
                        setYearAdmitted(e.target.value);
                      }}
                      required
                    >
                      <option value="" disabled={true}>
                        -- Select the year admitted of the student
                      </option>
                      {yearOptions}
                    </select>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-sm-6">
                    <Checkbox
                      checked={isTransferee}
                      handleChange={() => {
                        setIsTransferee(!isTransferee);
                      }}
                      label={"Transferee"}
                      id={"transferee"}
                    />
                  </div>
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <PrimaryButton
                type="submit"
                text={"Save"}
                onClick={() => {
                  const form = formRef.current;
                  if (!form.checkValidity()) {
                    setInvalidForm(true);
                  }
                }}
              />
              <SecondaryButton text={"Cancel"} onClick={handleClose} />
            </Modal.Footer>
          </form>
        </Modal>
      </form>
    </>
  );
};

export default EditProfileModal;
