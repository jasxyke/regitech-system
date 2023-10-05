import { Route, Routes } from "react-router-dom";
import GuestRoutes from "./components/PrivateRoutes/GuestRoutes";
import StaffPrivateRoutes from "./components/PrivateRoutes/StaffPrivateRoutes";
import StudentPrivateRoutes from "./components/PrivateRoutes/StudentPrivateRoutes";
import { AuthProvider } from "./context/AuthContext";
import useCRFKCookie from "./hooks/useCRFKCookie";
import LoginPage from "./pages/Login/LoginPage";
import ResetPage from "./pages/Login/ResetPage";
import SetPassPage from "./pages/Login/SetPassPage";
import CheckInbox from "./pages/Signup/CheckInbox";
import SignupPage from "./pages/Signup/SignupPage";
import AdminPage from "./pages/staff/HeadRegistrar/AdminPage";
import ManualEntryPage from "./pages/staff/ManualEntry/ManualEntryPage";
import StaffDashboard from "./pages/staff/StaffDashboard/StaffDashboard";
import StudentRecordsPage from "./pages/staff/StudentRecords/StudentRecordsPage";
import ViewStudentPage from "./pages/staff/StudentView/ViewStudentPage";
import VerificationPage from "./pages/staff/VerificationRequests/VerificationPage";
import StudentDashboard from "./pages/student/StudentDashboard/StudentDashboard";
import SubmissionPage from "./pages/student/Submission/SubmissionPage";
import ExportMasterlistPage from "./pages/staff/HeadRegistrar/ExportPage/ExportMasterlistPage";

function App() {
  useCRFKCookie();
  return (
    <AuthProvider>
      <Routes>
        <Route element={<GuestRoutes />}>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgot-password" element={<ResetPage />} />
          <Route path="/reset-password" element={<SetPassPage />} />
          <Route path="/sign-up" element={<SignupPage />} />
          <Route path="/check-inbox" element={<CheckInbox />} />
        </Route>
        <Route path="/student" element={<StudentPrivateRoutes />}>
          <Route path="dashboard" element={<StudentDashboard />} />
          <Route path="submission-page" element={<SubmissionPage />} />
        </Route>

        <Route path="/staff" element={<StaffPrivateRoutes />}>
          <Route
            path="document-verification/:id/:studentId"
            element={<VerificationPage />}
          />
          <Route path="verification-requests" element={<StaffDashboard />} />
          <Route path="head-registrar" element={<AdminPage />} />
          <Route path="student-records" element={<StudentRecordsPage />} />
          <Route path="student-record/:id" element={<ViewStudentPage />} />
          <Route path="manual-entry" element={<ManualEntryPage />} />
          <Route path="/staff/head-registrar">
            <Route path="" element={<AdminPage />} />
            <Route
              path="export-masterlist-page"
              element={<ExportMasterlistPage />}
            />
          </Route>
        </Route>

        <Route path="*" element={<h1>Not found 404</h1>} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
