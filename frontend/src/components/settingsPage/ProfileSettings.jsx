import React from "react";
import "./ProfileSettings.css";
import { useState } from "react";

const ProfileSettings = () => {



  return (
    <div className="profile-card">
      <div className="profile-header">
        <div className="profile-title">
        <h2>Profile Information</h2>
        <p>Update your personal details</p>
          </div>
      </div>







      <div className="avatar-section">
        <div className="avatar-circle">
          <span>U</span>
        </div>
        <div className="avatar-text">
          <button className="change-avatar-btn">Change</button>
          <p>PNG or JPG. Max 2MB.</p>
        </div>
      </div>


      <div className="form-grid">
        <div className="form-group">
          <label>Full name</label>
          <input type="text" defaultValue="Sami Harun" />
        </div>
        <div className="form-group">
          <label>Display name</label>
          <input type="text" defaultValue="Sami" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" defaultValue="sami@example.com" />
        </div>
        <div className="form-group">
          <label>Role</label>
          <input type="text" defaultValue="Team Member" />
        </div>
        <div className="form-group full-width">
          <label>Bio</label>
          <input type="text" defaultValue="Developer focused on team and results." />
        </div>
      </div>

      <div className="button-wrapper">
        <button className="save-btn">Save changes</button>
      </div>
    </div>
  );
};

export default ProfileSettings;