// components/UserDropdown.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./UserDropdown.css"; // Adjust the path as needed

export default function UserDropdown({ value, onChange }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://localhost:7007/Users") // adjust URL as needed
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  return (
    <>
      <label className="form-label">Tilldelad till
      </label>
      <select className="form-input" name="UserID_FK" value={value} onChange={onChange} required>
        <option value="">Select a user</option>
        {users.map((user) => (
          <option key={user.userID} value={user.userID}>
            {user.name || user.username}
          </option>
        ))}
      </select>
    </>
  );
}