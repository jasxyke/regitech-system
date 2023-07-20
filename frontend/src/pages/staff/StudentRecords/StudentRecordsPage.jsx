import React from "react";
import StudentRecordsTable from "./StudentRecordsTable";
import { useUser } from "../../../context/UserContext";
import LoadingPage from "../../../components/LoadingPage";
import GreetingsHeader from "../../../components/GreetingsHeader";
import MainNavButtons from "../../../components/NavButtons/MainNavButtons";

const StudentRecordsPage = () => {
  const user = useUser();
  if (user === null) {
    return <LoadingPage />;
  }
  return (
    <div>
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavButtons userRole={user.role.name} />
      <StudentRecordsTable />
    </div>
  );
};

export default StudentRecordsPage;
