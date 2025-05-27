import "./DashboardHeader.css";
import { Link } from "react-router-dom";
import React from "react";


export default function DashboardHeader(){




  return (
    <div className="header-container">
      <div className="header-title">
        <h1 className="header-title">Dashboard</h1>
      </div>
      <div className="header-subtitle-right">
      <h4>
          <Link to="/dashboard" className="header-subtitle-right">BuildBoard</Link> / <Link to="/dashboard" className="header-subtitle-right">Dashboard</Link>
        </h4>
      </div>
      
    </div>
  );
}
  