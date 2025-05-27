import "./Card.css";
import EditModal from "../taskPage/EditModal";
import { useState } from "react";

function showUser(teamMember) {
  return String(teamMember).charAt(0).toUpperCase() + String(teamMember).slice(1);
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

export default function Card({ task, onTaskUpdated }) {
  const [isEditing, setIsEditing] = useState(false);

  const getStatusColor = (status) => {
    switch (status) {
      case "Påbörjad": return "lightcoral";
      case "Ej påbörjad": return "khaki";
      case "Avslutad": return "lightgreen";
      default: return "white";
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false); // <- Make sure it's `false` by default

  return (
    <>
      <div
        className="card-style"
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          borderLeftColor: getStatusColor(task.status),
          borderLeftWidth: "15px",
          padding: "40px",
          marginBottom: "10px",
        }}
      >
        <header className="card-header">
          <h4>{task.title}</h4>
          <button
            className="edit-btn"
            onClick={() => setIsEditing(true)}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <img src="./src/assets/edit.svg" alt="edit-icon" />
          </button>
        </header>

        <main className="card-main">
          <small className="task-deadline">{formatDate(task.dueDate)}</small>
          <small> • </small>
          <small>
            <img src="./src/assets/user.png" className="userProfilePicture" />
            {showUser(task.teamMembers?.[0])}
          </small>
        </main>

        <footer className="card-footer">
          <small>Project: {task.project}</small>
        </footer>
      </div>

      {isEditing && (
        <EditModal
          task={task}
          onClose={() => setIsEditing(false)}
          onSave={(updatedTask) => {
            onTaskUpdated?.(updatedTask); // Notify parent if provided
            setIsEditing(false);
          }}
        />
      )}
    </>
  );
}