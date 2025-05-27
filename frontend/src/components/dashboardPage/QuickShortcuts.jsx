import React from "react";
import { Target, Calendar, Users, Clock } from "lucide-react";
import "./QuickShortcuts.css";
import { Link } from "react-router-dom";

const QuickShortcuts = () => {
  return (
    <section className="quick-shortcuts">
      <div className="shortcuts-header">
        <h2>Snabbgenvägar</h2>
      </div>

      <div className="shortcuts-grid">
        <button className="shortcut-button">
          <Target className="shortcut-icon" />
          <span><Link to ="/tasks"> Mina uppgifter </Link></span>
        </button>
        <button className="shortcut-button">
          <Calendar className="shortcut-icon" />
          <span><Link to ="/calendar">Kalender</Link></span>
        </button>
        <button className="shortcut-button">
          <Users className="shortcut-icon" />
          <span><Link to ="/team">Team</Link></span>
        </button>
        <button className="shortcut-button">
          
          <Clock className="shortcut-icon" />
          <span><Link to ="/tasks">Senaste</Link></span>
        </button>
      </div>
    </section>
  );
};

export default QuickShortcuts;