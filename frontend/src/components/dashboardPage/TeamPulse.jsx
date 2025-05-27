import React from "react";
import { Smile, Meh, Frown } from "lucide-react";
import "./TeamPulse.css";

const TeamPulse = () => {
  return (
    <section className="team-pulse-stats">
      <div className="team-mood-stat">
        <div className="team-mood-percentage" style={{ color: "#10b981" }}>60%</div>
        <Smile className="team-mood-icon happy" />
        <div className="team-mood-label">Happy</div>
      </div>

      <div className="team-mood-stat">
        <div className="team-mood-percentage" style={{ color: "#f59e0b" }}>30%</div>
        <Meh className="team-mood-icon neutral" />
        <div className="team-mood-label">Neutral</div>
      </div>

      <div className="team-mood-stat">
        <div className="team-mood-percentage" style={{ color: "#ef4444" }}>10%</div>
        <Frown className="team-mood-icon sad" />
        <div className="team-mood-label">Sad</div>
      </div>
    </section>
  );
};

export default TeamPulse;