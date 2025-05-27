import React, { useState, useEffect } from "react";
import axios from "axios";
import "./EditModal.css"; 
import UserDropdown from "./UserDropdown";
import ProjectDropdown from "./ProjectDropdown";

  
export default function EditModal({ task, onClose, onSave }) {
  if (!task) return null;

  const [formData, setFormData] = useState({
    Title: "",
    Description: "",
    DueDate: "",
    UserID_FK: "",
    GoalID_FK: "",
    Status: "Ej påbörjad",
  });

  const [isModalOpen, setIsModalOpen] = useState(false); // <- Make sure it's `false` by default

  useEffect(() => {
    if (task) {
      setFormData({
        Title: task.title || "",
        Description: task.description || "",
        DueDate: task.dueDate ? task.dueDate.split("T")[0] : "", // handle ISO date
        UserID_FK: task.UserID_FK || "",
        GoalID_FK: task.GoalID_FK || "",
        Status: task.status || "Ej påbörjad",
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedTask = {
      ...formData,
      UserID_FK: parseInt(formData.UserID_FK),
      ProjectID_FK: parseInt(formData.ProjectID_FK),
    };

    try {
      const response = await axios.patch(`https://localhost:7007/tasks/${task.taskID}`, updatedTask);
      console.log("Task updated:", response.data);
      onSave(response.data);
      onClose();
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (



    <div className="modal-container">
      <div className="modal-content">
        <header className="modal-header">
          <h2 className="modal-title">Redigera uppgift
          </h2>
          <button type="button" onClick={onClose} className="modal-close">
            ×
          </button>
          
          <div>
          <p className="modal-subtitle">Obligatoriska fält är markerade med en asterisk *</p>
          </div>
        </header>

        <form onSubmit={handleSubmit} className="modal-form">
          <label className="form-label">Rubrik</label>
          <input type="text" name="Title" value={formData.Title} onChange={handleChange} className="form-input" required />

          <label className="form-label">Förfallodatum</label>
          <input type="date" name="DueDate" value={formData.DueDate} onChange={handleChange} className="form-input" required />

          <UserDropdown value={formData.UserID_FK} onChange={handleChange} />
          <ProjectDropdown value={formData.GoalID_FK} onChange={handleChange} />

          <label className="form-label">Status</label>
          <select name="Status" value={formData.Status} onChange={handleChange} className="form-input" required>
            <option value="Ej påbörjad">Ej påbörjad</option>
            <option value="Påbörjad">Påbörjad</option>
            <option value="Avslutad">Avslutad</option>
          </select>

          <div className="modal-footer">
            <button type="button" className="delete-btn" onClick={onClose}>Ta bort uppgift</button>
            <button type="submit" className="todo-btn">Spara</button>
          </div>
        </form>
      </div>
    </div>
  );
}