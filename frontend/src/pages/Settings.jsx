import { useState } from "react";
import "../index.css";
import ProfileSettings from "../components/settingsPage/ProfileSettings";
import SettingsHeader from "../components/settingsPage/SettingsHeader";
import AccountSettings from "../components/settingsPage/AccountSettings";
import SettingsTabs from "../components/settingsPage/SettingsTabs";
import Navbar from "../components/navbar/Navbar";
import CustomSidebar from "../components/navbar/CustomSidebar";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("Profile");

  return (
    <div className="settings-page">
      <Navbar />
      <SettingsHeader />
      <CustomSidebar />
      <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Profile" && <ProfileSettings />}
      {activeTab === "Account" && <AccountSettings />}
    </div>
  );
};

export default Settings;