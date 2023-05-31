import GreetingsHeader from "../../../components/GreetingsHeader";
import { useUser } from "../../../context/UserContext";

const StudentDashboard = () => {
  const student = useUser();
  return (
    <div>
      <GreetingsHeader name={student?.user?.firstname || "unknown"} />
    </div>
  );
};

export default StudentDashboard;
