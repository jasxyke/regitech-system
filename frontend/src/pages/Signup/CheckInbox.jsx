import PlainNavbar from "../../components/navbars/PlainNavbar";
import { MdOutlineMail } from "react-icons/md";
import { Button } from "react-bootstrap";
import { BiFontSize } from "react-icons/bi";

const CheckInbox = () => {
  return (
    <div>
      <PlainNavbar />
      <div style={{ marginTop: "8.5rem" }}>
        <div className="text-start m-5 p-5  fw-bolder">
          <p
            className="fst-italic  mb-0"
            style={{
              color: "#790000",
              fontSize: "4rem",
              letterSpacing: "10px",
            }}
          >
            Check your inbox
          </p>

          <p className="fst-italic fs-2 mb-3" style={{ color: "#790000" }}>
            To verify your email
          </p>
          <p className="fs-6 mb-0">
            If you have concerns about your submission. Feel free
          </p>
          <p className="fs-6 mb-3">to send us an email.</p>
          <Button
            style={{
              color: "white",
              fontSize: "1.2rem",
              backgroundColor: "#790000",
              border: "none",
              marginTop: "1rem",
            }}
          >
            <MdOutlineMail size={36} /> Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckInbox;
