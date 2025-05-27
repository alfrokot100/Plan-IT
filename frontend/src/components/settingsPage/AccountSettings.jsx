import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-card">
      <div className="account-header">
        <h2>Account Settings</h2>
        <p>Manage your account</p>
      </div>

      <div className="form-group">
        <label>Password</label>
        <div className="password-wrapper">
          <input type="password" value="••••••••" disabled />
          <button className="change-btn">Change</button>
        </div>
      </div>

      <div className="form-group">
        <label>Language</label>
        <select defaultValue="en">
          <option value="en">English (US)</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="ja">Japanese</option>
        </select>
      </div>

      <div className="form-group">
        <label>Timezone</label>
        <select defaultValue="utc-8">
          <option value="utc-8">Pacific Time (UTC-8)</option>
          <option value="utc-7">Mountain Time (UTC-7)</option>
          <option value="utc-6">Central Time (UTC-6)</option>
          <option value="utc-5">Eastern Time (UTC-5)</option>
          <option value="utc-0">Greenwich Mean Time (UTC+0)</option>
          <option value="utc+1">Central European Time (UTC+1)</option>
        </select>
      </div>

      <div className="danger-zone">
        <div className="danger-zone-header">
          <span className="danger-icon">⚠️</span>
          <h3>Danger Zone</h3>
        </div>
        <p className="danger-desc">Actions here cannot be undone. Be careful.</p>
        <div className="danger-buttons">
          <button className="danger-btn">Reset Account</button>
          <button className="danger-btn">Delete Account</button>
        </div>
      </div>

      <div className="save-wrapper">
        <button className="save-btn">Save Account Settings</button>
      </div>
    </div>
  );
};

export default AccountSettings;