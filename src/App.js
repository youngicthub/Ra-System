import logo from "./logo.svg";
import "./App.css";

// Auth Pages
import SignIn from "./pages/authPages/SignIn";
import SignUpOTPPage from "./pages/authPages/SignUpOTPPage";
import AccountSetUpIntro from "./pages/authPages/AccountSetUpIntro";
import AccountSetUp from "./pages/authPages/AccountSetUp";
import SignInAdminEmployee from "./pages/authPages/SignInAdminEmployee";
import PasswordReset from "./pages/authPages/PasswordReset";
import NewPassword from "./pages/authPages/NewPassword";


// Landing page
import Compile from "./pages/landingPage/Compile";

// Profile pages
import Profile from "./pages/profilePages/ProfileAccount";
import ProfileAdministration from "./pages/profilePages/ProfileAdministration";
import ProfileAdministrationInviteMembers from "./pages/profilePages/ProfileAdministrationInviteMembers";
import ProfileBillingPaymentMethod from "./pages/profilePages/ProfileBillingPaymentMethod";
import ProfileBillingPlans from "./pages/profilePages/ProfileBillingPlans";

// Dashboards
import DashboardNew from "./pages/DashboardNew";
import WorkManagementDashboard from "./pages/dashboardPage/WorkManagementDashboard";
import RequestDashboard from "./pages/dashboardPage/RequestDashboard";

// Settings
import PersonalDetails from "./pages/settingsPage/PersonalDetails";
import UserPermission from "./pages/settingsPage/UserPermission";
import SettingsPayment from "./pages/settingsPage/SettingsPayment";
import SettingsPlan from "./pages/settingsPage/SettingsPlan";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HistoryDashboard from "./pages/dashboardPage/HistoryDashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>


          <Route exact path="/" element={<Compile />} />

          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/signup-otp" element={<SignUpOTPPage />} />
          <Route
            exact
            path="/account-setup-intro"
            element={<AccountSetUpIntro />}
          />
          <Route exact path="/account-setUp" element={<AccountSetUp />} />
          <Route exact path="/sign" element={<SignInAdminEmployee />} />
          <Route exact path="/reset" element={<PasswordReset />} />
          <Route exact path="/new" element={<NewPassword />} />
          

          <Route
            exact
            path="/work-management"
            element={<WorkManagementDashboard />}
          />
          <Route exact path="/dashboard" element={<DashboardNew />} />
          <Route exact path="/history" element={<HistoryDashboard />} />
          <Route exact path="/request" element={<RequestDashboard />} />

          <Route exact path="/profile" element={<Profile />} />
          <Route
            exact
            path="/profile-admin/organization-detail"
            element={<ProfileAdministration />}
          />
          <Route
            exact
            path="/profile-admin/invite-members"
            element={<ProfileAdministrationInviteMembers />}
          />
          <Route
            exact
            path="/profile-billing/payment-method"
            element={<ProfileBillingPaymentMethod />}
          />
          <Route
            exact
            path="/profile-billing/plans"
            element={<ProfileBillingPlans />}
          />

          <Route exact path="/settings/details" element={<PersonalDetails />} />
          <Route
            exact
            path="/settings/permission"
            element={<UserPermission />}
          />
          <Route exact path="/settings/payment" element={<SettingsPayment />} />
          <Route exact path="/settings/plan" element={<SettingsPlan />} />
        </Routes>
      </BrowserRouter>
      {/* <SignUp /> */}
      {/* <SignUpOTPPage /> */}
      {/* <AccountSetUpIntro /> */}
      {/* <AccountSetUp /> */}
    </div>
  );
}

export default App;
