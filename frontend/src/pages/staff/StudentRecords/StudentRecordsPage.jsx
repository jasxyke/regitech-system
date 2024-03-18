import React from "react";
import StudentRecordsTable from "./StudentRecordsTable";
import { useUser } from "../../../context/UserContext";
import LoadingPage from "../../../components/LoadingPage";
import GreetingsHeader from "../../../components/GreetingsHeader";
import MainNavButtons from "../../../components/NavButtons/MainNavButtons";
import StudentRecordsNavigator from "./StudentRecordsNavigator";

const StudentRecordsPage = () => {
  const user = useUser();
  if (user === null) {
    return <LoadingPage />;
  }
  console.log(user);
  return (
    <div>
      <GreetingsHeader name={user?.firstname || "unknown"} />
      <MainNavButtons userRole={user.role.name} />
      <StudentRecordsNavigator />
    </div>
  );
};

export default StudentRecordsPage;
