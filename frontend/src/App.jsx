import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import VerificationPage from "./pages/VerificationRequests/VerificationPage";
import StaffDashboard from "./pages/StaffDashboard/StaffDashboard";
import AdminPage from "./pages/HeadRegistrar/AdminPage";
import MainNavbar from "./components/MainNavbar";
import SignupPage from "./pages/Signup/SignupPage";
import StudentProfile from "./pages/StudentProfile/StudentProfile";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";

function App() {
  return (
    <>
      <MainNavbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/document-verification" element={<VerificationPage />} />
        <Route path="/staff" element={<StudentDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/student-profile" element={<StudentProfile />} />
      </Routes>
    </>
  );
}

export default App;
