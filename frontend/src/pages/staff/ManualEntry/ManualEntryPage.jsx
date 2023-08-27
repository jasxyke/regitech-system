import { useUser } from "../../../context/UserContext";
import LoadingPage from "../../../components/LoadingPage";
import BackButton from "../../../components/ui/BackButton";
import SectionHeader from "../../../components/SectionHeader";
import StudentAccountForm from "./StudentAccountForm";
import DocumentsChecklist from "./DocumentsChecklist";
import EventButton from "../../../components/NavButtons/EventButton";
import submitFileIcon from "../../../assets/submitfile.png";
import SecondaryButton from "../../../components/ui/SecondaryButton";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../../components/ui/PrimaryButton";
const ManualEntryPage = () => {
  const user = useUser();
  const navigate = useNavigate();

  const submitHandler = () => {};

  if (user === null) {
    return <LoadingPage />;
  }

  return (
    <div>
      <BackButton text={"Back to dasboard"} />
      <div className="mt-5"></div>
      <SectionHeader text={"Manual Entry"} block={false} />
      <div className="mt-5 bg-grey">
        <SectionHeader text={"Student info"} block={true} />
        <div className="container px-5 py-3 pb-5">
          <StudentAccountForm submitHandler={submitHandler} />
        </div>
      </div>
      <div className="mt-5 bg-grey">
        <SectionHeader text={"Checklist"} block={true} />
        <div className="container px-5 py-3 pb-5">
          <DocumentsChecklist />
        </div>
      </div>
      <div className="mt-3 mb-3 d-flex justify-content-center">
        <EventButton
          icon={submitFileIcon}
          label={"Upload documents"}
          onClick={() => {}}
        />
      </div>
      <div className="mb-5 mt-3 d-flex">
        <SecondaryButton
          text={"Cancel"}
          onClick={() => navigate("/staff/verification-requests")}
        />
        <div className="me-3"></div>
        <PrimaryButton
          text={"Save student checklist"}
          onClick={() => {
            "Save student checklist";
          }}
        />
      </div>
    </div>
  );
};

export default ManualEntryPage;
