import Toast from "react-bootstrap/Toast";
import logo from "../../assets/puplogo.png";
import { getCurrentTime } from "../../utils/datesHandler";

const Notification = ({ showNotification, closeNotification, message }) => {
  return (
    <>
      <style type="text/css">
        {`
            
            `}
      </style>
      <Toast show={showNotification} onClose={closeNotification}>
        <Toast.Header>
          <img src={logo} className="rounded me-2" alt="" />
          <strong className="me-auto">RegiTech</strong>
          <small>{getCurrentTime()}</small>
        </Toast.Header>
        <Toast.Body>{message}</Toast.Body>
      </Toast>
    </>
  );
};

export default Notification;
