import React from "react";
import "./SettingsTabs.css";

const tabs = ["Profile", "Account"];

const SettingsTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="settings-tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={`tab-button ${activeTab === tab ? "active" : ""}`}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default SettingsTabs;