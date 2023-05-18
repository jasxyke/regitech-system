import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import VerificationPage from "./pages/VerificationRequests/VerificationPage";
import StaffDashboard from "./pages/StaffDashboard/StaffDashboard";
import AdminPage from "./pages/HeadRegistrar/AdminPage";
import SignupPage from "./pages/Signup/SignupPage";
import StudentProfile from "./pages/StudentProfile/StudentProfile";
import StudentDashboard from "./pages/StudentDashboard/StudentDashboard";
import StudentLayout from "./components/layouts/StudentLayout";
import StafflLayout from "./components/layouts/StafflLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignupPage />} />

        <Route path="/student" element={<StudentLayout />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path=":id" element={<StudentProfile />} />
        </Route>

        <Route path="/staff" element={<StafflLayout />}>
          <Route path="document-verification" element={<VerificationPage />} />
          <Route path="dashboard" element={<StaffDashboard />} />
          <Route path="admin" element={<AdminPage />} />
        </Route>

        <Route path="*" element={<h1>Not found 404</h1>} />
      </Routes>
    </>
  );
}

export default App;
