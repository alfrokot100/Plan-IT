import React from "react";
import "./TodaysFocus.css";
import { Link } from "react-router-dom";

const TodaysFocus = () => {
  return (
    <section className="todays-focus-wrapper">
      <div className="focus-header">
        <h2>Dagens Fokus</h2>
        <p>Dina huvudmål för idag</p>
      </div>

      <div className="task-list">
        <div className="task-item">
          <div className="task-header">
            <div className="task-name">
              <span className="task-status-dot status-ongoing"></span>
              <span>Färdigställ projektförslaget</span>
            </div>
            <span className="priority-high">Hög</span>
          </div>
          <div className="task-due">Förfaller om 3 timmar</div>
        </div>

        <div className="task-item">
          <div className="task-header">
            <div className="task-name">
              <span className="task-status-dot status-warning"></span>
              <span>Retrospektivt möte med teamet</span>
            </div>
            <span className="priority-medium">Medel</span>
          </div>
          <div className="task-due">Kl. 14:00 - 15:00</div>
        </div>

        <button className="view-all-button"> <Link to ="/tasks"> Visa alla uppgifter</Link></button>
      </div>
    </section>
  );
};

export default TodaysFocus;