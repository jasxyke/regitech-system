import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage";
import ResetPage from "./pages/Login/ResetPage";
import VerificationPage from "./pages/staff/VerificationRequests/VerificationPage";
import SignupPage from "./pages/Signup/SignupPage";
import StudentLayout from "./components/layouts/StudentLayout";
import StafflLayout from "./components/layouts/StafflLayout";
import { AuthProvider } from "./context/AuthContext";
import StaffDashboard from "./pages/staff/StaffDashboard/StaffDashboard";
import AdminPage from "./pages/staff/HeadRegistrar/AdminPage";
import StudentDashboard from "./pages/student/StudentDashboard/StudentDashboard";
import StudentPrivateRoutes from "./components/PrivateRoutes/StudentPrivateRoutes";
import StaffPrivateRoutes from "./components/PrivateRoutes/StaffPrivateRoutes";
import GuestRoutes from "./components/PrivateRoutes/GuestRoutes";
import useCRFKCookie from "./hooks/useCRFKCookie";
import StudentRecordsPage from "./pages/staff/StudentRecords/StudentRecordsPage";
import SubmissionPage from "./pages/student/Submission/SubmissionPage";
import CheckInbox from "./pages/Signup/CheckInbox";

function App() {
  useCRFKCookie();
  return (
    <AuthProvider>
      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/reset" element={<ResetPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/check" element={<CheckInbox />} />
        </Route>
        <Route path="/student" element={<StudentPrivateRoutes />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="submission-page" element={<SubmissionPage />} />
        </Route>

        <Route path="/staff" element={<StaffPrivateRoutes />}>
          <Route
            path="document-verification/:id"
            element={<VerificationPage />}
          />
          <Route path="verification-requests" element={<StaffDashboard />} />
          <Route path="head-registrar" element={<AdminPage />} />
          <Route path="student-records" element={<StudentRecordsPage />} />
        </Route>

        <Route path="*" element={<h1>Not found 404</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
